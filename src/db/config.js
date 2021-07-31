require("dotenv").config();
module.exports = {
  development: {
    username: "postgres",
    password: "urentcargun",
    database: "u-rent-car-dev",
    host: "127.0.0.1",
    port: 5434,
    dialect: "postgres",
    seederStorage: "sequelize",
    seederStorageTableName: "SequelizeData",
    logging: console.log,
  },
  production: {
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DB_NAME,
    region: "ap-northeast-2",
    host: process.env.RDS_HOSTNAME,
    port: process.env.RDS_PORT,
    dialect: "postgres",
    seederStorage: "sequelize",
    seederStorageTableName: "SequelizeData",
    logging: false,
  },
};
