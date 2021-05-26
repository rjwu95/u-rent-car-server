import cors from "cors";
import express from "express";
import sequelize from "./db/sequelize";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());
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
