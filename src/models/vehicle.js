const mongo = require("mongoose");

const vehicleSchema = new mongo.Schema({
  SeatingCapacity: { type: Number, required: true } //Validator example
});

const model = mongo.model("vehicle", vehicleSchema);
module.exports = model;
