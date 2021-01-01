const logger = require("./../config/logger");
const pool = require("./../config/databaseConfig");

const getConfiguration = async (req, res) => {
  sql = "SELECT * FROM CONFIGURATION";
  pool.query(sql, (err, result) => {
    if (err) logger.error(err);

    res.send(result);
  });
};

const updateConfiguration = async (req, res) => {
  const timeDuration = req.body.timeDuration;
  const stakeLimit = req.body.stakeLimit;
  const hotPercentage = req.body.hotPercentage;
  const restrictionExpires = req.body.restrictionExpires;

  sql = `UPDATE configuration SET timeDuration = ${timeDuration}, stakeLimit = ${stakeLimit}, hotPercentage = ${hotPercentage}, restrictionExpires = ${restrictionExpires} WHERE id = 1`;
  pool.query(sql, (err, result) => {
    if (err) logger.error(err);

    res.send(200);
  });
};

module.exports = {
  getConfiguration,
  updateConfiguration,
};
