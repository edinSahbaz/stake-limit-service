const Status = require("../models/Status");
const Ticket = require("../models/Ticket");
const statusMonitor = require("./../util/statusMonitor");
const stakeServiceDBQueries = require("./../util/stakeServiceDBQueries");

async function sendTicket(req, res, next) {
  const stake = req.body.stake;

  // Validating stake
  if (isNaN(stake) || stake <= 0) {
    res.sendStatus(422);
    return;
  }

  // Generating new ticket
  const { id, deviceId } = new Ticket(stake);

  // Checking if device is blocked
  const status = new Status();
  const isBlocked = await statusMonitor.checkBlocked(deviceId);

  if (isBlocked) {
    res.send(status.getStatus(status.BLOCKED));
    return;
  }

  // Performing DB queries
  await stakeServiceDBQueries.execute(id, deviceId, stake);

  // Sending status
  res.send(status.getStatus(status.OK));
}

module.exports = {
  sendTicket,
};
