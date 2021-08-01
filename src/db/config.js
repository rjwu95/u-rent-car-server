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
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    region: "ap-northeast-2",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    seederStorage: "sequelize",
    seederStorageTableName: "SequelizeData",
    logging: false,
  },
};
