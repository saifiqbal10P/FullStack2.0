const { users } = require("../models/index");

class AuthService {
  constructor() {}

  static async GetUsers() {
    return await users.findAll();
  }
}
module.exports = AuthService;
