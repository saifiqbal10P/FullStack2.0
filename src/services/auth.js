const { users } = require("../models/index");

class AuthService {
  constructor() { }

  static async GetUsers() {
    return await users.findAll();
  }
  
  static async GetUserByUserName(email) {

    return await users.findOne({ where: { email: email } })
  }
}
module.exports = AuthService;
