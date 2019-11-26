const { vehicle } = require("../models/index");

class RouteService {
  constructor() { }

  static async GetRoutes() {

    var routes= await vehicle.findAll();

    console.log(routes);
    return await vehicle.findAll({
        include:[VehicleDetail,Routes]
    });
  }
}
module.exports = RouteService;
