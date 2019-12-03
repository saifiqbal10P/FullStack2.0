const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// const vehicleModel = require("../models/vehicle");

const Joi = require("@hapi/joi");
const userService = require("../services/auth");
/**
 * @swagger
 * /api/courses:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/", async (req, res) => {
  // const vehicles = await vehicleModel.find().sort("id");
  var response = await userService.GetUsers();
  res.send(response);
});

// router.post("/", (req, res) => {
//   const schema = Joi.object({
//     SeatingCapacity: Joi.number()
//       .min(1)
//       .max(100)
//       .required()
//   });

//   const result = schema.validate(req.body);

//   if (result.error) {
//     return res.status(400).send(result.error);
//   } else {
//     var vehicle = new vehicleModel(req.body);

//     vehicle
//       .save()
//       .then(item => {
//         res.send("item saved to database");
//       })
//       .catch(err => {
//         res.status(400).send("unable to save to database");
//       });
//   }
// });

// router.put("/:id", (req, res) => {
//   res.send("ok");
// });

// router.delete("/:id", (req, res) => {
//   res.send("ok");
// });

module.exports = router;
