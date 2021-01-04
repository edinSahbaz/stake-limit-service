const { v4: uuidv4 } = require("uuid");
const { machineIdSync } = require("node-machine-id");

class Ticket {
  constructor(stake) {
    this.id = uuidv4();
    this.deviceId = machineIdSync({ original: true });
    this.stake = stake;
  }
}

module.exports = Ticket;
