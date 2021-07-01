"use strict";
const bcrypt = require("bcrypt");

function generateHashStr(str) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(str, 10, function (err, hash) {
      if (err) reject(err);
      resolve(hash);
    });
  });
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
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
      "staffs",
      [
        {
          id: 1,
          loginId: "hyunwoo",
          password: await generateHashStr("hyunwoo0000"),
          name: "hyunwoo",
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
    return queryInterface.bulkDelete("staffs", null, {});
  },
};
