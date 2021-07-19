import { Router } from "express";
import { Staff } from "../db/models";
import bcrypt from "bcrypt";

const router = Router();

router.get("/", async (req, res) => {
  const staffs = await Staff.findAll({ attributes: ["id", "name", "loginId"] });
  return res.status(200).send(staffs);
});

function generateHashStr(str: string) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(str, process.env.SALT_ROUNDS, function (err, hash) {
      if (err) reject(err);
      resolve(hash);
    });
  });
}

router.post("/", async (req, res) => {
  const isExist = await Staff.findOne({ where: { loginId: req.body.loginId } });
  if (isExist) {
    return res.status(400).send("이미 사용중인 아이디입니다.");
  }
  const hashedPassword = await generateHashStr(req.body.password);
  const staff = await Staff.create({ ...req.body, password: hashedPassword });
  return res
    .status(200)
    .send({ id: staff.id, loginId: staff.loginId, name: staff.name });
});

export default router;
