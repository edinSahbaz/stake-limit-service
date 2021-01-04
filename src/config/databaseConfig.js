const mysql = require("mysql");
const logger = require("./../config/logger");

// DB Config
const config = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
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
