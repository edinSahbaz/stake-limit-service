const dbQuery = require("./../util/dbQuery");
const timeTracking = require("./timeTracking");

async function trackSesion(deviceId) {
  let sesionActive = true;
  const sesionDuration = await timeTracking(deviceId);
  const timeDuration = await loadTimeDuration(deviceId);

  if (sesionDuration > timeDuration) sesionActive = false;

  return sesionActive;
}

async function loadTimeDuration(deviceId) {
  // Getting timestamp when device sesion begun
  let sql = `SELECT timeDuration FROM configuration WHERE id=1`;
  let res = await dbQuery(sql);
  const { timeDuration } = res[0];

  return timeDuration;
}

module.exports = trackSesion;
