const mongoose = require("mongoose");
//db configuration//.............

const db = mongoose.connect("mongodb://localhost/BusBooking", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = db;
