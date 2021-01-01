const mysql = require("mysql");
const logger = require("./../config/logger");

// DB Config
config = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
  connectionLimit: 300,
  multipleStatements: true,
};

// MySql connection pool
const pool = mysql.createPool(config);

pool.getConnection((err, connection) => {
  if (err) logger.error(err);

  if (connection) connection.release();

  return;
});

module.exports = pool;
