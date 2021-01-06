const Configuration = require("../models/Configuration");
const dbQuery = require("./../util/dbQuery");

async function getConfiguration(req, res, next) {
  const sql = `SELECT * FROM configuration`;

  res.send(await dbQuery(sql));
}

async function updateConfiguration(req, res, next) {
  // Getting params from body
  const {
    timeDuration,
    stakeLimit,
    hotPercentage,
    restrictionExpires,
  } = req.body;

  // Creating Configuration model
  const config = new Configuration(
    timeDuration,
    stakeLimit,
    hotPercentage,
    restrictionExpires
  );

  // Validating params through model
  if (!config.validateInput()) {
    res.sendStatus(422);
    return;
  }

  // Updating configuration in DB
  const sql = `UPDATE configuration 
         SET timeDuration = ${timeDuration}, stakeLimit = ${stakeLimit}, 
         hotPercentage = ${hotPercentage}, restrictionExpires = ${restrictionExpires} 
         WHERE id = 1`;

  res.sendStatus(await dbQuery(sql, "UPDATE"));
}

module.exports = {
  getConfiguration,
  updateConfiguration,
};
