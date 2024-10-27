const { Sequelize } = require("sequelize");

// create database instance
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

// test connection
async function testConn() {
  try {
    await sequelize.authenticate();
    console.log("Connected to DB")
  } catch (err) {
    console.log("Error in connecting to DB : ", err)
  }
}

// run connection
testConn();

module.exports = sequelize;