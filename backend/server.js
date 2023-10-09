const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const connectDb = require("../config/connectDb");

const configPath = path.join(__dirname, "..", "config", ".env");
dotenv.config({ path: configPath });

const app = express();

const { PORT } = process.env;
connectDb();

app.listen(PORT, () => {
  console.log(`Server is running port ${PORT}`);
});
