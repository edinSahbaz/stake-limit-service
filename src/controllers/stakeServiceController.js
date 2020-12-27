const db = require("../config/databaseConfig");

const connect_to_service = (req, res) => {
  db.query("SELECT * FROM Ticket", (err, result) => {
    if (err) throw err;
    res.send(result);
  });
};

module.exports = { connect_to_service };
