"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    var sequelize = queryInterface.sequelize;

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
          "vehicles",
          [
            {
              numberPlate: "AEZ-3392"
            },
            {
              numberPlate: "ZER-0092"
            },
            {
              numberPlate: "AEZ-6615"
            }
          ],
          {}
        )
        .then(async function(result) {
          console.log("started");
          //Vehicle Detail
          await queryInterface.sequelize
            .query("SELECT id FROM vehicles", {
              type: Sequelize.QueryTypes.SELECT
            })
            .then(function(vehicleids) {
              console.log(vehicleids);
              var vehicleDetails = [];
              vehicleids.forEach(vehicleId => {
                vehicleDetails.push({
                  vehicle_id: vehicleId.id,
                  seatingCapacity: 4,
                  availableSeats: 0
                });
              });

              queryInterface.bulkInsert("vehicledetails", vehicleDetails, {});
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
              console.log(vehicledetailids);
              var routes = [];
              vehicledetailids.forEach(vehicledetailid => {
                routes.push({
                  vehicledetail_id: vehicledetailid.id,
                  routes:
                    '{ "routes":[ {"lat": "24.312131", "long": "45.123123"} , {"lat": "67.991233", "long": "64.999712"} ] }'
                });
              });

              queryInterface.bulkInsert("routes", routes, {});
            })
            .catch(function(errpor) {});
        })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkDelete("users", null),
      queryInterface.bulkDelete("vehicles", null)
    ]);
  }
};
