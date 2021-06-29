import { Router } from "express";
import { Staff } from "../db/models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const ACCESS_TOKEN_EXPIRES = 60 * 60 * 4; // 4 hour

const router = Router();

function comparePassword(a: string, b: string) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(a, b, function (err, result) {
      if (err) reject(err);
      if (result) {
        resolve(result);
      } else {
        reject(result);
      }
    });
  });
}

router.post("/login", async (req, res) => {
  const secret = req.app.get("jwt-secret");
  const staff = await Staff.findOne({
    attributes: ["id", "loginId", "name", "password"],
    where: { loginId: req.body.loginId },
  });
  if (!staff) return res.status(403).send("로그인 실패");
  try {
    const { id, loginId, name } = staff;
    await comparePassword(req.body.password, staff.password);
    const token = jwt.sign(
      {
        id,
        loginId,
        name,
      },
      secret,
      { expiresIn: ACCESS_TOKEN_EXPIRES }
    );
    return res.status(200).send({ id, loginId, name, token });
  } catch (err) {
    console.log(err);
    return res.status(403).send({ message: "로그인 실패" });
  }
});

router.get("/me", async (req, res) => {
  const secret = req.app.get("jwt-secret");
  try {
    const decoded = jwt.verify(req.headers.token, secret);
    return res.status(200).send({ ...decoded, token: req.headers.token });
  } catch (err) {
    return res.status(401).send("세션 만료");
  }
});

export default router;
