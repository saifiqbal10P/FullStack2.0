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

const app = express();
//Test enviornment
// console.log("Mail Server " + config.get("mail.host"));

//middlewares//.............
app.use(bodyparser.json());
app.use(logger);

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

const port = process.env.Port || 9000;
app.listen(9000, () => console.log(`listening on port ${port}`));
