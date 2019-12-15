const Joi = require("@hapi/joi");
const express = require("express");
const db = require("./db/dbconnection");
const bodyparser = require("body-parser");
const config = require("config");
const courses = require("./routes/courses");
const auth = require("./routes/auth");
const vechileRoutes = require("./routes/vehicleroutes");
const home = require("./routes/home");
const logger = require("./middlewares/logger");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const cors = require("cors");
const app = express();
const socketconfig = require("./socket/socket");

//Test enviornment
// console.log("Mail Server " + config.get("mail.host"));

//middlewares//.............
app.use(bodyparser.json());
app.use(logger);

//For localhost only
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });
app.use(cors());

//Swagger document/......

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Bus Booking",
      description: "Bus Booking Api",
      contact: {
        name: "saifullah.iqbal@tenpearls.com"
      },
      servers: ["http://localhost:5000"]
    }
  },
  apis: ["./routes/*.js"]
  //apis: ["app.js"]
};

const swaggerDocument = swaggerJsDoc(swaggerOptions);

//routes//.......................
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/", home);
app.use("/api/", auth);
app.use("/api/routes", vechileRoutes);

//Socket IO  Test....................

//End Test

const port = process.env.Port || 9000;
var server = app.listen(9000, () => console.log(`listening on port ${port}`));

new socketconfig(server);
