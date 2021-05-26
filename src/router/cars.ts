import { Router, Request, Response } from "express";
import { Car } from "../db/models";

const router = Router();

const AMOUNT_OF_PAGE = 20;

router.get("/", async (req: Request, res: Response) => {
  const { page } = req.query;
  try {
    const cars = await Car.findAndCountAll({
      limit: AMOUNT_OF_PAGE,
      offset: (Number(page) - 1) * AMOUNT_OF_PAGE,
    });
    return res.status(200).send({ cars: cars.rows });
  } catch (err) {
    return res.status(500).send({ error: err });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  const car = await Car.findOne({
    where: { id: Number(req.params.id) },
  });
  return res.status(200).send(car);
});

router.post("/", async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const newCar = await Car.create(body);
    return res.status(200).send(newCar);
  } catch (err) {
    return res.status(500).send({ error: err });
  }
});

router.patch("/", async (req, res) => {
  await Car.update(req.body, {
    where: { id: Number(req.body.id) },
  });

  return res.status(200).send("success");
});

export default router;
