// const mongoose = require("mongoose");
// //db configuration//.............

// const db = mongoose.connect("mongodb://localhost/BusBooking", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// module.exports = db;

const Sequelize = require("sequelize");

const sequelize = new Sequelize("final", "postgres", "10pearls", {
  host: "localhost",
  dialect: "postgres",
  define: {
    timestamps: false
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
global.sequelize = sequelize;
