const dbQuery = require("./../util/dbQuery");
const covnertTimeToSeconds = require("./convertTimeToSeconds");
const getCurrentTimeInSec = require("./getCurrentTimeInSec");
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
  // Getting time duration for restriction to expire
  let sql = "SELECT restrictionExpires FROM configuration WHERE id=1";
  let res = await dbQuery(sql);
  const { restrictionExpires } = res[0];

  if (restrictionExpires === 0) return false;

  // Getting the timestamp when device was blocked
  sql = `SELECT blockedTimeStamp FROM device WHERE id="${deviceId}"`;
  res = await dbQuery(sql);
  const blockedTimeStamp = await covnertTimeToSeconds(res[0].blockedTimeStamp);

  // Get current time in seconds
  let currentTime = await getCurrentTimeInSec();

  // If check is controlled the day after restriction is set, add 24 hours to current time
  if (currentTime < blockedTimeStamp) {
    currentTime += 84000;
  }

  const timeDifference = currentTime - blockedTimeStamp;

  if (timeDifference < restrictionExpires) return false;
  else {
    await removeRestriction(deviceId);
    return true;
  }
}

async function removeRestriction(deviceId) {
  const sql = `UPDATE device SET stakes=0, blocked=0, blockedTimeStamp=NULL WHERE id = "${deviceId}"`;
  await dbQuery(sql, "UPDATE");
}

async function blockDevice(deviceId) {
  const sql = `UPDATE device SET blocked=1, blockedTimeStamp=CURRENT_TIMESTAMP WHERE id = "${deviceId}"`;
  await dbQuery(sql, "UPDATE");
}

module.exports = { checkBlocked, blockDevice };
