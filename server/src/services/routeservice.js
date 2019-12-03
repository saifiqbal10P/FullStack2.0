const {
  vehicles,
  vehicledetails,
  routes,
  bookings
} = require("../models/index");

class RouteService {
  constructor() {}

  static async GetRoutes() {
    return await vehicles.findAll({
      include: [
        {
          model: vehicledetails,
          as: "vehicledetails",
          include: [
            {
              model: routes,
              as: "vehicleroutes"
            }
          ]
        }
      ]
    });
  }
  static async GetRouteDetails(routeid) {
    return await vehicles.findAll({
      where: {
        id: routeid
      },
      include: [
        {
          model: vehicledetails,
          as: "vehicledetails",
          include: [
            {
              model: routes,
              as: "vehicleroutes"
            }
          ]
        }
      ]
    });
  }
  static async BookRoute(model) {
    return await bookings.create({
      status: model.status,
      state: model.state,
      user_id: model.user_id,
      vehicle_id: model.vehicle_id,
      createdAt: new Date()
    });
  }
}
module.exports = RouteService;
