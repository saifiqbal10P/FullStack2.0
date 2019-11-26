const router = require("express").Router();
const routeService = require("../services/routeservice");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Joi = require("@hapi/joi");

router.get("/", async (req, res) => {
  return routeService.GetRoutes();
});

module.exports = router;
