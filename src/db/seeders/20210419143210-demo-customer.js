"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
      */
    return queryInterface.bulkInsert(
      "customers",
      [
        {
          name: "유건",
          birthday: "990101",
          hp: "01011110000",
          address: "남가좌동 12",
          detailAddress: "12-1번지",
          license: "01-01910-1919",
          licenseType: "2종보통",
          licenseDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('customers', null, {});
      */
    return queryInterface.bulkDelete("customers", null, {});
  },
};
