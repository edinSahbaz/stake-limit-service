const pool = require("./../config/databaseConfig");
const logger = require("./../config/logger");

async function query(sql, method = "SELECT") {
  let data = new Promise((resolve, reject) => {
    pool.query(sql, (err, result) => {
      if (err) {
        logger.error(err);
        return resolve(500);
      }

      if (method === "SELECT") resolve(result);
      else resolve(200);
    });
  });

  return data;
}

module.exports = query;
