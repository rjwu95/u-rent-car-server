import { Sequelize } from "sequelize";
import config from "./config";

const env = process.env.NODE_ENV || "development";
const configEnv = config[env];
export default new Sequelize(
  configEnv.database,
  configEnv.username,
  configEnv.password,
  configEnv
);
