const Status = require("../models/Status");
const dbQuery = require("./../util/dbQuery");
const covnertTimeToSeconds = require("./convertTimeToSeconds");
const stakeServiceDBQueries = require("./stakeServiceDBQueries");

async function checkBlocked(deviceId) {
  const deviceExists = await stakeServiceDBQueries.deviceExists(deviceId);

  if (!deviceExists) return false;

  const sql = `SELECT blocked FROM device WHERE id="${deviceId}"`;
  const res = await dbQuery(sql);

  const blocked = !!res[0].blocked;
  const hasExpired = await restrictionExpired(deviceId);

  if (blocked && !hasExpired) {
    return true;
  }

  return false;
}

async function restrictionExpired(deviceId) {
  // Getting the timestamp when device was blocked
  let sql = `SELECT blockedTimeStamp FROM device WHERE id="${deviceId}"`;
  let res = await dbQuery(sql);
  let blockedTimeStamp = res[0].blockedTimeStamp;

  if (blockedTimeStamp === null) return true;

  blockedTimeStamp = await covnertTimeToSeconds(res[0].blockedTimeStamp);

  // Getting time duration for restriction to expire
  sql = "SELECT timeDuration FROM configuration WHERE id=1";
  res = await dbQuery(sql);
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
