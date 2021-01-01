const dbQuery = require("./../util/dbQuery");

async function getConfiguration(req, res, next) {
  sql = "SELECT * FROM CONFIGURATION";
  dbQuery(sql, res);
}

async function updateConfiguration(req, res, next) {
  const { timeDuration, stakeLimit, hotPercentage, restrictionExpires } = req.body;

  sql = `UPDATE configuration 
         SET timeDuration = ${timeDuration}, stakeLimit = ${stakeLimit}, 
         hotPercentage = ${hotPercentage}, restrictionExpires = ${restrictionExpires} 
         WHERE id = 1`;

  dbQuery(sql, res, "UPDATE");
}

module.exports = {
  getConfiguration,
  updateConfiguration,
};
