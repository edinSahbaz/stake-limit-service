const express = require("express");
const dotenv = require("dotenv");
const logger = require("./config/logger");

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

// Handling non-existant routes
app.use((req, res, next) => {
  res.sendStatus(404);
});

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, logger.info(`Server running on port ${PORT}`));
