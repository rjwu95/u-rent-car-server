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
      "cars",
      [
        {
          number: "1",
          status: "1",
          name: "1",
          grade: "1",
          gear: "1",
          fuel: "1",
          distance: "1",
          remainFuel: "1",
          birth: new Date(),
          remark: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          number: "1",
          status: "1",
          name: "1",
          grade: "1",
          gear: "1",
          fuel: "1",
          distance: "1",
          remainFuel: "1",
          birth: new Date(),
          remark: "1",
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
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("cars", null, {});
  },
};
