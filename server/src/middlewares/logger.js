function log(req, res, next) {
  console.log("test logging");
  next();
}

module.exports = log;
