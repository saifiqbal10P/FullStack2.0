const {
  vehicles,
  vehicledetails,
  routes,
  bookings
} = require("../models/index");

class RouteService {
  constructor() {}

  static async GetRoutes() {
    var routesDetails = await vehicles.findAll({
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

    var userbookings = await bookings.findAll({
      attributes: ["id", "status", "state", "vehicle_id"]
    });

    for (var route in routesDetails) {
      var routeBookings = userbookings.filter(
        x => x.vehicle_id == routesDetails[route].id && x.status == "inprogress"
      ).length;

      var availableseats =
        routesDetails[route].vehicledetails.seatingCapacity - routeBookings;

      routesDetails[route].vehicledetails.availableSeats = availableseats;
    }

    return routesDetails;
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
      user_id: Number(model.user_id),
      vehicle_id: Number(model.vehicle_id),
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
