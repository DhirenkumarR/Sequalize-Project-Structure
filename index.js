require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

//Database
const sequelize = require("./config/db");
sequelize.sync({ force: true }).then(() => console.log("Database Synced."))

// server middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
