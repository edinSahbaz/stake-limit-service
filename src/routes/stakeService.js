const express = require("express");
const app = express.Router();

const stakeServiceController = require("../controllers/stakeServiceController");

app.get("/", stakeServiceController.connect_to_service);

module.exports = app;
