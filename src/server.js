const express = require("express");
const dotenv = require("dotenv");

// Initializing express app
const app = express();

// Initializing dotenv config
dotenv.config();

// Routes setup
const index = require("./routes/stakeService");
app.use("/api/v1/stakeService", index);

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server running on port ${PORT}...`));
