const Sequelize = require("sequelize");

process.env.DB_DBNAME="fullstack2";
process.env.DB_USER="postgres";
process.env.DB_PASSWORD="10pearls";
process.env.DB_HOST="localhost";


const sequelize = new Sequelize(process.env.DB_DBNAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "postgres",
  define: {
    timestamps: false
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
global.sequelize = sequelize;
