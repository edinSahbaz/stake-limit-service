const dbQuery = require("./../util/dbQuery");

async function connectToService(req, res, next) {
  sql = "SELECT * FROM TICKET";

  dbQuery(sql, res);
}

module.exports = {
  connectToService,
};
