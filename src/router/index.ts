import { Router } from "express";
import cars from "./cars";
import contracts from "./contracts";
import customers from "./customers";
import staffs from "./staffs";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send("건 가즈아");
});

router.use("/cars", cars);
router.use("/contracts", contracts);
router.use("/customers", customers);
router.use("/staffs", staffs);

module.exports = router;
