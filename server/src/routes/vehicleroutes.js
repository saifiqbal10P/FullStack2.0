const router = require("express").Router();
const routeService = require("../services/routeservice");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Joi = require("@hapi/joi");

router.get("/", async (req, res) => {
  var response = await routeService.GetRoutes();
  res.send(response);
});

router.get("/details/:id", async (req, res) => {
  var response = await routeService.GetRouteDetails(req.params.id);
  res.send(response);
});

router.post("/book", async (req, res) => {
  var model = {
    user_id: req.body.userid,
    vehicle_id: req.body.vehicleid,
    status: "inprogress",
    state: "Departed"
  };
  await routeService.BookRoute(model);
  res.status(200).send("Booking created successfully");
});

module.exports = router;
