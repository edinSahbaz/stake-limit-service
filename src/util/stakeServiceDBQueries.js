const dbQuery = require("./dbQuery");

async function deviceExists(deviceId) {
  const sql = `SELECT COUNT(*) AS num FROM device WHERE id = "${deviceId}"`;

  const res = await dbQuery(sql);
  return !!res[0].num;
}

async function execute(id, deviceId, stake) {
  // Inserting new ticket into the DB
  let sql;
  sql = `INSERT INTO ticket(id, deviceId, stake) VALUES("${id}","${deviceId}", ${stake});`;

  await dbQuery(sql, "INSERT");

  // Checking if machine is already in DB and inesrting it if it's not
  if (await deviceExists(deviceId))
    sql = `UPDATE device SET stakes = stakes + ${stake} WHERE id = "${deviceId}"`;
  else sql = `INSERT INTO device (id, stakes) VALUES("${deviceId}",${stake});`;

  await dbQuery(sql, "INSERT/UPDATE");
}

module.exports = { execute, deviceExists };
