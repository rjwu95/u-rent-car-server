import { Request, Response, Router } from "express";
import { Customer } from "../db/models";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const customers = await Customer.findAll();
    return res.status(200).send(customers);
  } catch (err) {
    return res.status(500).send({ error: err });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  const customer = await Customer.findOne({
    where: { id: Number(req.params.id) },
  });
  return res.status(200).send(customer);
});

router.patch("/", async (req, res) => {
  try {
    await Customer.update(req.body, {
      where: { id: Number(req.body.id) },
    });
    return res.status(200).send("success");
  } catch (err) {
    return res.status(500).send(err);
  }
});

export default router;
