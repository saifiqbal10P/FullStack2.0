const { vehicles } = require("../models/index");

class RouteService {
  constructor() {}

  static async GetRoutes() {
    var routes = await vehicles.findAll({
      attributes: ["id", "numberPlate"]
    });

    console.log(routes);
    return await vehicles.findAll({
      include: [VehicleDetails, Routes]
    });
  }
}
module.exports = RouteService;
