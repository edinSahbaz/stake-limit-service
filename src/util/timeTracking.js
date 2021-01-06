const dbQuery = require("./../util/dbQuery");
const covnertTimeToSeconds = require("./convertTimeToSeconds");
const getCurrentTimeInSec = require("./getCurrentTimeInSec");

async function checkTime(deviceId) {
  // Getting timestamp when device sesion begun
  let sql = `SELECT registeredTimeStamp FROM device WHERE id="${deviceId}"`;
  let res = await dbQuery(sql);

  const { registeredTimeStamp } = res[0];
  const registeredTime = await covnertTimeToSeconds(registeredTimeStamp);

  // Getting current time in seconds
  const currentTime = await getCurrentTimeInSec();

  // If check is controlled the day after device was registered, add 24 hours to current time
  if (currentTime < registeredTime) {
    currentTime += 84000;
  }

  const sesionDuration = currentTime - registeredTime;

  return sesionDuration;
}

module.exports = checkTime;
