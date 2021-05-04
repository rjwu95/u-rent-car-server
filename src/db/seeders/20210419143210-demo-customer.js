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
          name: "1",
          birthday: "1",
          backId: "1",
          hp: "1",
          address: "1",
          detailAddress: "1",
          license: "1",
          licenseType: "1",
          licenseDate: new Date(),
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
