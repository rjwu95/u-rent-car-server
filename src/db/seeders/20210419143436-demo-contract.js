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
      "contracts",
      [
        {
          carId: 3,
          outerId: 3,
          renterId: 3,
          driverId: 3,
          departure: new Date(),
          arrive: new Date(),
          giveLocation: "1",
          carCheck: "1",
          initKm: "1",
          fee: "1",
          feeTable: "1",
          remark: "1",
          special: "1",
        },
        // {
        //   carId: 4,
        //   outerId: 4,
        //   renterId: 4,
        //   driverId: 4,
        //   departure: new Date(),
        //   arrive: new Date(),
        //   giveLocation: "1",
        //   carCheck: "1",
        //   initKm: "1",
        //   fee: "1",
        //   feeTable: "1",
        //   remark: "1",
        //   special: "1",
        // },
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
    return queryInterface.bulkDelete("contracts", null, {});
  },
};
