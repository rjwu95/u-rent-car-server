"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("customers", {
      id: {
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
      hp: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      detailAddress: {
        type: Sequelize.STRING,
      },
      license: {
        type: Sequelize.STRING,
      },
      licenseType: {
        type: Sequelize.STRING,
      },
      licenseDate: {
        type: Sequelize.DATE,
      },
      postcode: {
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
    return queryInterface.dropTable("customers");
  },
};
