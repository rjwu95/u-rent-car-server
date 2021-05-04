"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("contracts", {
      id: {
        allowNull: false,
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
        allowNull: false,
      },
      renterId: {
        type: Sequelize.INTEGER,
        references: {
          key: "id",
          model: "customers",
        },
        allowNull: false,
      },
      driverId: {
        type: Sequelize.INTEGER,
        references: {
          key: "id",
          model: "customers",
        },
        allowNull: false,
      },
      carId: {
        type: Sequelize.INTEGER,
        references: {
          key: "id",
          model: "cars",
        },
        allowNull: false,
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
      carCheck: {
        type: Sequelize.STRING,
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
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE,
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE,
      // },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("contracts");
  },
};
