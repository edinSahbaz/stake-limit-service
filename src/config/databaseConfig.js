const mysql = require("mysql");

// DB Config
config = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
};

// Create DB connection
const connection = mysql.createConnection(config);

// Connect to DB
connection.connect((err) => {
  if (err) throw err;

  console.log("MySql connected...");
});

module.exports = connection;
