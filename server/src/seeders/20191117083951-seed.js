"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    var sequelize = queryInterface.sequelize;

    ////Just to save time we are only checking one table for seeding .If no data exists in users table then run seed. Proper work is to check every table for seeding
    const user = await queryInterface.rawSelect("users", {}, ["id"]);

    if (!user) {
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
        queryInterface
          .bulkInsert(
            "routes",
            [
              {
                routes:
                  '{ "routes":[ {"lat": "24.312131", "long": "45.123123"} , {"lat": "67.991233", "long": "64.999712"} ] }'
              },
              {
                routes:
                  '{ "routes":[ {"lat": "24.312131", "long": "45.123123"} , {"lat": "67.991233", "long": "64.999712"} ] }'
              },
              {
                routes:
                  '{ "routes":[ {"lat": "24.312131", "long": "45.123123"} , {"lat": "67.991233", "long": "64.999712"} ] }'
              }
            ],
            {}
          )
          .then(async function(result) {
            await queryInterface.sequelize
              .query("SELECT id FROM routes", {
                type: Sequelize.QueryTypes.SELECT
              })
              .then(function(routeids) {
                var vehicleDetails = [];
                routeids.forEach(routeid => {
                  vehicleDetails.push({
                    routeid: routeid.id,
                    seatingCapacity: 4,
                    availableSeats: 0
                  });
                });

                return queryInterface.bulkInsert(
                  "vehicledetails",
                  vehicleDetails,
                  {}
                );
              })
              .catch(function(errpor) {
                console.log("error");
              });
            //Vehicle Routes

            await queryInterface.sequelize
              .query("SELECT id FROM vehicledetails", {
                type: Sequelize.QueryTypes.SELECT
              })
              .then(function(vehicledetailids) {
                var vehicles = [];
                vehicledetailids.forEach(vehicledetailid => {
                  vehicles.push({
                    numberPlate: "AEZ-1223",
                    vehicledetail_id: vehicledetailid.id
                  });
                });

                return queryInterface.bulkInsert("vehicles", vehicles, {});
              })
              .catch(function(errpor) {});
          })
      ]);
    }
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkDelete("users", null),
      queryInterface.bulkDelete("vehicles", null)
    ]);
  }
};
