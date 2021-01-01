const logger = require("../config/logger");
const pool = require("./../config/databaseConfig");

const connectToService = async (req, res) => {
  sql = "SELECT * FROM TICKET";
  pool.query(sql, (err, result) => {
    if (err) logger.error(err);

    res.send(result);
  });
};

module.exports = {
  connectToService,
};
