const dbQuery = require("./../util/dbQuery");
const { v4: uuidv4 } = require("uuid");
const { machineId, machineIdSync } = require("node-machine-id");

async function connectToService(req, res, next) {
  const stake = req.body.stake;

  if (stake <= 0) {
    res.sendStatus(422);
    return;
  }

  const id = uuidv4();
  const deviceId = await machineId({ original: true });

  let sql = `INSERT INTO ticket(id, deviceId, stake) VALUES("${id}","${deviceId}", ${stake});`;
  dbQuery(sql, res, "POST");
}

module.exports = {
  connectToService,
};
