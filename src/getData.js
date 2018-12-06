const dbConnection = require("./database/db_connection");

const getData = cb => {
  databaseConnection.query("SELECT * FROM resources", (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = getData;
