import { Router, Request, Response } from "express";
import { Car, Contract } from "../db/models";

const router = Router();

router.get("/", async (req, res) => {
  const contracts = await Contract.findAll({
    attributes: ["id", "createdAt"],
  });
  return res.status(200).send(contracts);
});

router.get("/:id", async (req: Request, res: Response) => {
  console.log(req.params.id);
  const contracts = await Contract.findOne({
    where: { id: Number(req.params.id) },
  });
  return res.status(200).send(contracts);
});

router.post("/", async (req, res) => {
  const contract = await Contract.create(req.body);
  return res.status(200).send(contract);
});

export default router;
