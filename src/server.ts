import cors from "cors";
import express from "express";
import sequelize from "./db/sequelize";
import bodyParser from "body-parser";
import router from "./router";

const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = process.env.PORT || 3001;

app.use("/api", router);
app.set("jwt-secret", process.env.JWT_SECRET);

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});

app.use(cors());

sequelize
  .authenticate()
  .then(() => console.log("√ db connection success"))
  .catch((err) => console.log("유건", err));
