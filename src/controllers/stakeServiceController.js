const Status = require("../models/Status");
const Ticket = require("../models/Ticket");
const dbQuery = require("./../util/dbQuery");
const dbRecordsCheck = require("./../util/dbRecordsCheck");

async function sendTicket(req, res, next) {
  const stake = req.body.stake;

  // Validating stake
  if (isNaN(stake) || stake <= 0) {
    res.sendStatus(422);
    return;
  }

  // Generating new ticket
  const { id, deviceId } = new Ticket(stake);

  // Inserting new ticket into the DB
  let sql;
  sql = `INSERT INTO ticket(id, deviceId, stake) VALUES("${id}","${deviceId}", ${stake});`;
  await dbQuery(sql, "INSERT");

  // Checking if machine is already in DB and inesrting it if it's not
  if (await dbRecordsCheck(deviceId))
    sql = `UPDATE device SET stakes = stakes + ${stake} WHERE id = "${deviceId}"`;
  else sql = `INSERT INTO device (id, stakes) VALUES("${deviceId}",${stake});`;

  res.send(await dbQuery(sql, "INSERT/UPDATE"));
}

module.exports = {
  sendTicket,
};
