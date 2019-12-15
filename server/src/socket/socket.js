var soketio = require("socket.io");
var routeService = require("../services/routeservice");

class SocketConfiguration {
  constructor(server) {
    var io = soketio.listen(server);

    let interval;

    io.on("connection", socket => {
      // console.log("New client connected");

      if (interval) {
        clearInterval(interval);
      }
      interval = setInterval(() => routeService.UpdateRoutes(socket), 5000);

      // socket.on("disconnect", () => {
      //   console.log("Client disconnected");
      // });
    });
  }
}

module.exports = SocketConfiguration;
