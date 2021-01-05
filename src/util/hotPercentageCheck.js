const Status = require("../models/Status");
const dbQuery = require("./../util/dbQuery");

async function checkPercentage(deviceId) {
  const status = new Status();

  // Getting stakes from device
  let sql = `SELECT stakes FROM device WHERE id="${deviceId}"`;
  let res = await dbQuery(sql);
  const { stakes } = res[0];

  // Getting stakeLimit and hotPercentage from configuration
  sql = `SELECT stakeLimit, hotPercentage FROM configuration WHERE id=1`;
  res = await dbQuery(sql);
  const { stakeLimit, hotPercentage } = res[0];

  if (stakes >= stakeLimit) {
    return status.getStatus(status.BLOCKED);
  }

  if (await isAboveHotPercentage(stakes, stakeLimit, hotPercentage)) {
    return status.getStatus(status.HOT);
  }

  return status.getStatus(status.OK);
}

async function isAboveHotPercentage(stakes, stakeLimit, hotPercentage) {
  const percentage = Math.round((stakes / stakeLimit) * 100);

  if (percentage >= hotPercentage) return true;
  else return false;
}

module.exports = checkPercentage;
