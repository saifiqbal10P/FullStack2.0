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
      // include: [
      //   {
      //     model: bookings,
      //     as: "routes_bookings"
      //   }
      // ]
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

  static UpdateRoutes = async socket => {
    try {
      var result = await this.GetRoutes();

      socket.emit("UpdateRoutes", result); // Emitting a new message. It will be consumed by the client
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };
}
module.exports = RouteService;
