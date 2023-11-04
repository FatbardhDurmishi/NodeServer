const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-ecommerce", "root", "bardhi123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
