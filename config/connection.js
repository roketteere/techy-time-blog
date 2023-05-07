const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  // database name
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    // database location
    host: "127.0.0.1",
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;
