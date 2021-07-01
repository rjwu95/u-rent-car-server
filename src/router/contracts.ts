import { Router, Request, Response } from "express";
import { Car, Contract, Customer, Staff } from "../db/models";

const router = Router();

router.get("/", async (req, res) => {
  const contracts = await Contract.findAll({
    attributes: ["id", "createdAt", "departure", "arrive"],
    include: [
      {
        model: Customer,
        as: "renter",
        attributes: ["name", "birthday", "hp"],
      },
      { model: Car, as: "car", attributes: ["number", "name"] },
      { model: Staff, as: "outer", attributes: ["name"] },
    ],
    order: [["updatedAt", "DESC"]],
  });
  return res.status(200).send(contracts);
});

router.get("/:id", async (req: Request, res: Response) => {
  const contracts = await Contract.findOne({
    where: { id: Number(req.params.id) },
    include: [
      {
        model: Customer,
        as: "renter",
      },
      {
        model: Customer,
        as: "driver",
      },
      { model: Car, as: "car" },
      { model: Staff, as: "outer" },
    ],
  });
  return res.status(200).send(contracts);
});

router.post("/", async (req, res) => {
  const { renter, driver, car } = req.body;
  let [a, b, c] = await Promise.all([
    Customer.create(renter),
    Car.findOne({ where: { number: car.number } }),
    driver?.name && Customer.create(driver),
  ]);
  if (!b) {
    b = await Car.create(req.body.car);
  }
  const contract = await Contract.create({
    ...req.body,
    renterId: a.id,
    carId: b.id,
    driverId: c ? c.id : a.id,
  });
  return res.status(200).send(contract);
});

router.patch("/", async (req, res) => {
  console.log(req.body);
  await Promise.all([
    Contract.update(req.body, {
      where: { id: Number(req.body.id) },
    }),
    Car.update(req.body.car, {
      where: { id: Number(req.body.car.id) },
    }),
    Customer.update(req.body.renter, {
      where: { id: Number(req.body.renter.id) },
    }),
    Customer.update(req.body.driver, {
      where: { id: Number(req.body.driver.id) },
    }),
  ]);

  return res.status(200).send("success");
});

export default router;
