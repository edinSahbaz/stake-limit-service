const covnertTimeToSeconds = require("./convertTimeToSeconds");

// Getting curent time and converting to seconds
async function getCurrentTimeInSec() {
  const currentTimeStamp = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const currentTime = await covnertTimeToSeconds(currentTimeStamp);

  return currentTime;
}

module.exports = getCurrentTimeInSec;
