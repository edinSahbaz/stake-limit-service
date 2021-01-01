const pool = require("./../config/databaseConfig");
const logger = require("./../config/logger");

async function query(sql, res, method = "SELECT") {
  pool.query(sql, (err, result) => {
    if (err) {
      logger.error(err);
      res.sendStatus(500);
      return;
    }

    logger.info("Query executed");

    if (method === "SELECT") res.send(result);
    else res.sendStatus(200);
  });
}

module.exports = query;
