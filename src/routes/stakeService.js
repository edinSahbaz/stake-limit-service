const express = require("express");
const app = express.Router();

const stakeServiceController = require("../controllers/stakeServiceController");

// GET
// /api/v1/stake-limit-service
app.get("/", stakeServiceController.connectToService);

module.exports = app;
