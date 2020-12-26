const express = require("express");
const dotenv = require("dotenv");

const app = express();

// Initializing dotenv config
dotenv.config();

// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server running on port ${PORT}...`));
