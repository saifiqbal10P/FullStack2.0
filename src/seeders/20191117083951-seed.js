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
      queryInterface.bulkInsert(
        "vehicle",
        [
          {
            numberPlate: "AEZ-3392"
          },
          {
            numberPlate: "ZER-0092"
          }
          , {
            numberPlate: "AEZ-6615"
          }
        ],
        {}
      ).then(data=>{
        Promise.all([
        sequelize.query('SELECT id FROM vehicle', { type: sequelize.QueryTypes.SELECT}),
        ]).then((vehicleids)=>{
          console.log(vehicleids);
          var vehicleDetail = [];
          vehicleids.forEach(vehicleId=> {
            vehicleDetail.push({
              vehicle_id: vehicleId.id,
              seatingCapacity: 4,
              availableSeats:0
            })
          });
         queryInterface.bulkInsert('vehicledetail', vehicleDetail, {});
        })
      })
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkDelete("users", null),
      queryInterface.bulkDelete("vehicle", null)
    ]);
  }
};
