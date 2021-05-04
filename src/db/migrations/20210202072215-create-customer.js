"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("customers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      birthday: {
        type: Sequelize.INTEGER,
      },
      backId: {
        type: Sequelize.STRING,
      },
      hp: {
        type: Sequelize.INTEGER,
      },
      address: {
        type: Sequelize.STRING,
      },
      detailAddress: {
        type: Sequelize.STRING,
      },
      license: {
        type: Sequelize.INTEGER,
      },
      licenseType: {
        type: Sequelize.STRING,
      },
      licenseDate: {
        type: Sequelize.DATE,
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
    return queryInterface.dropTable("customers");
  },
};
