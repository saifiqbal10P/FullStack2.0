"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert(
        "users",
        [
          {
            email: "saifullah.iqbal@tenpearls.com",
            password: "10pearls"
          },
          {
            email: "fullstack@tenpearls.com",
            password: "10pearls"
          },
          {
            email: "testing@tenpearls.com",
            password: "10pearls"
          }
        ],
        {}
      ),
      queryInterface.bulkInsert(
        "vehicle",
        [
          {
            numberPlate: "AEZ-3392"
          },
          {
            numberPlate: "ZER-0092"
          }
        ],
        {}
      )
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkDelete("users", null),
      queryInterface.bulkDelete("vehicle", null)
    ]);
  }
};
