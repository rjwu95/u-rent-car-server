import { Router } from "express";
import cars from "./cars";
import contracts from "./contracts";
import customers from "./customers";
import staffs from "./staffs";
import auth from "./auth";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send("route success");
});

router.use("/cars", cars);
router.use("/contracts", contracts);
router.use("/customers", customers);
router.use("/staffs", staffs);
router.use("/auth", auth);

module.exports = router;
