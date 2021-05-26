import { Router } from "express";
import { Staff } from "../db/models";

const router = Router();

router.get("/", async (req, res) => {
  const staffs = await Staff.findAll({ attributes: ["id", "name"] });
  return res.status(200).send(staffs);
});

export default router;
