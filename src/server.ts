import cors from "cors";
import express from "express";
import sequelize from "./db/sequelize";

const app = express();
const port = process.env.PORT || 3001;

app.use("/api", require("./router"));

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});

app.use(cors());

sequelize
  .authenticate()
  .then(() => console.log("√ db connection success"))
  .catch((err) => console.log(err));
