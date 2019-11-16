const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: false
  },
  lastname: {
    type: String,
    required: false
  },
  username: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 100,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
});

const model = mongoose.model("user", usersSchema);
module.exports = model;
