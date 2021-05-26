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
  const contract = await Contract.create(req.body);
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
  ]);

  return res.status(200).send("success");
});

export default router;
