async function covnertTimeToSeconds(timeStamp) {
  var time = timeStamp.split(":");
  var seconds = +time[0] * 60 * 60 + +time[1] * 60 + +time[2];

  return seconds;
}

module.exports = covnertTimeToSeconds;
