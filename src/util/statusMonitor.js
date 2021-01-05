const Status = require("../models/Status");
const dbQuery = require("./../util/dbQuery");
const covnertTimeToSeconds = require("./convertTimeToSeconds");
const stakeServiceDBQueries = require("./stakeServiceDBQueries");

async function checkBlocked(deviceId) {
  // Checking if device exists
  const deviceExists = await stakeServiceDBQueries.deviceExists(deviceId);

  if (!deviceExists) return false;

  // Checking if device is blocked
  const sql = `SELECT blocked FROM device WHERE id="${deviceId}"`;
  const res = await dbQuery(sql);
  const blocked = !!res[0].blocked;

  if (!blocked) return false;

  // Checking if device restriction can be lifted
  const hasExpired = await restrictionExpired(deviceId);

  if (!hasExpired) return true;

  return false;
}

async function restrictionExpired(deviceId) {
  // Getting the timestamp when device was blocked
  sql = `SELECT blockedTimeStamp FROM device WHERE id="${deviceId}"`;
  res = await dbQuery(sql);
  const blockedTimeStamp = await covnertTimeToSeconds(res[0].blockedTimeStamp);

  // Getting time duration for restriction to expire
  let sql = "SELECT timeDuration FROM configuration WHERE id=1";
  let res = await dbQuery(sql);
  const restrExpTime = res[0].timeDuration;

  // Getting curent time and converting to seconds
  const currentTimeStamp = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const currentTime = await covnertTimeToSeconds(currentTimeStamp);
  const timeDifference = currentTime - blockedTimeStamp;

  if (timeDifference < restrExpTime) return false;
  else {
    await removeRestriction(deviceId);
    return true;
  }
}

async function removeRestriction(deviceId) {
  const sql = `UPDATE device SET blocked=0 WHERE id = "${deviceId}"`;
  await dbQuery(sql, "UPDATE");
}

module.exports = { checkBlocked };
