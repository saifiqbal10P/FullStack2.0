const router = require("express").Router();
const userService = require("../services/auth");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Joi = require("@hapi/joi");
//Register user

// router.post("/user", async (req, res) => {
//   const { error } = validate(req);

//   if (error) {
//     return res.status(400).send(error);
//   }

//   let user = await userModel.findOne({ email: req.body.email });
//   if (user) return res.status(400).send("user already registered !");

//   user = new userModel(req.body);

//   const salt = await bcrypt.genSalt(10);
//   user.password = await bcrypt.hash(user.password, salt);

//   //TODO: apply hashing in password...
//   user
//     .save()
//     .then(item => {
//       res.send("user created sucessfully");
//     })
//     .catch(err => {
//       res.status(400).send("unable to save to database ,error:" + err);
//     });
// });

router.post("/login", async (req, res) => {
  const { error } = validateLoginModel(req);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let user = await userService.GetUserByUserName(req.body.email);
  if (!user) return res.status(400).send("username or password is invalid");

  // const isValidPassword = await bcrypt.compare(
  //   req.body.password,
  //   user.password
  // );

  if(!req.body.password===user.password)
  {
    return res.status(400).send("password is invalid");
  }

  //if (!isValidPassword) return res.status(400).send("password is invalid");

  var token = jwt.sign({ id: user.id }, "jwtprivateKey"); //get this key from config file

  res.json({
    token: token
  });
});

function validate(req) {
  const schema = Joi.object({
    username: Joi.string()
      .min(5)
      .max(100)
      .required(),
    email: Joi.string()
      .min(5)
      .max(50)
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
  }).options({ allowUnknown: true });

  return schema.validate(req.body);
}
function validateLoginModel(req) {
  const schema = Joi.object({
    email: Joi.string()
      .min(5)
      .max(100)
      .required(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
  }).options({ allowUnknown: true });

  return schema.validate(req.body);
}

module.exports = router;
