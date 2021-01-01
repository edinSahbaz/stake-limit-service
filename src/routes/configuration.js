const express = require("express");
const app = express.Router();

const configurationController = require("../controllers/configurationController");

// GET
// /api/v1/stake-limit-service/configuration
app.get("/", configurationController.getConfiguration);

// PUT
// /api/v1/stake-limit-service/configuration
app.put("/", configurationController.updateConfiguration);

module.exports = app;
