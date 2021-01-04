const express = require("express");
const dotenv = require("dotenv");

// Initializing express app
const app = express();

// Initializing dotenv config
dotenv.config();

// Body-parser
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Routes setup
var baseRoute = "/api/v1/stake-limit-service";
const service = require("./routes/stakeService");
const configuration = require("./routes/configuration");

app.use(baseRoute, service);
app.use(`${baseRoute}/configuration`, configuration);

// Handling non-existent routes
app.use((req, res, next) => {
  res.sendStatus(404);
});

module.exports = app;
