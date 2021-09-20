"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("contracts", {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      outerId: {
        type: Sequelize.INTEGER,
        references: {
          key: "id",
          model: "staffs",
        },
      },
      renterId: {
        type: Sequelize.INTEGER,
        references: {
          key: "id",
          model: "customers",
        },
      },
      driverId: {
        type: Sequelize.INTEGER,
        references: {
          key: "id",
          model: "customers",
        },
      },
      carId: {
        type: Sequelize.INTEGER,
        references: {
          key: "id",
          model: "cars",
        },
      },
      departure: {
        type: Sequelize.DATE,
      },
      arrive: {
        type: Sequelize.DATE,
      },
      giveLocation: {
        type: Sequelize.STRING,
      },
      carCheckUrl: {
        type: Sequelize.TEXT,
      },
      initKm: {
        type: Sequelize.INTEGER,
      },
      fee: {
        type: Sequelize.INTEGER,
      },
      feeTable: {
        type: Sequelize.STRING,
      },
      remark: {
        type: Sequelize.STRING,
      },
      special: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("contracts");
  },
};
