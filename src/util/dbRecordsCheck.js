const dbQuery = require("./../util/dbQuery");

async function deviceExists(deviceId) {
  const sql = `SELECT COUNT(*) AS num FROM device WHERE id = "${deviceId}"`;

  const res = await dbQuery(sql);
  return !!res[0].num;
}

module.exports = deviceExists;
