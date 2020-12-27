const express = require("express");
const app = express();
const dotenv = require("dotenv");

// Initializing dotenv config
dotenv.config();

// Routes setup
const index = require("./controllers/");
app.use("/api/", index);

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server running on port ${PORT}...`));
