const express = require("express");
const app = express.Router();

const stakeServiceController = require("../controllers/stakeServiceController");

// POST
// /api/v1/stake-limit-service
app.post("/", stakeServiceController.connectToService);

module.exports = app;
