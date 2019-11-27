const { vehicles,vehicledetails,routes } = require("../models/index");

class RouteService {
  constructor() {}

  static async GetRoutes() {
    return await vehicles.findAll({
      include: [
        {
          model:vehicledetails,as:'vehicledetails',
          include:
          [
            {
              model:routes,as:"vehicleroutes"
            }
          ]
        }
      ]
    });

    // console.log(routes);
    // return await vehicles.findAll({
    //   include: [VehicleDetails, Routes]
    // });
  }
}
module.exports = RouteService;
