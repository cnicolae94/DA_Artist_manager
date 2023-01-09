require("dotenv").config();

// Sequelize DB connection
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.POSTGRESDATABASE,
  process.env.POSTGRESUSER,
  process.env.POSTGRESPASSWORD,
  {
    host: process.env.POSTGRESHOST,
    port: process.env.POSTGRESPORT,
    dialect: "postgres",
  }
);

module.exports = sequelize;