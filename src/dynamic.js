const dbConnection = require("../database/db_connection");
const dynamic = require("./handler");

const getData = (type, skill, level, cb) => {
  console.log(type);
  console.log(skill);
  console.log(level);

  if (type === "*" && skill === "*" && level === "*") {
    console.log("all types selected");

    dbConnection.query(`SELECT * FROM resources`, (err, res) => {
      if (err) return cb(err);
      console.log("res.rows: " + res.rows);
      cb(null, res.rows);
    });
  } else if (type !== "*" || skill !== "*" || level !== "*") {
    console.log("different from all types selected");
    if (type !== "*") {
      dbConnection.query(
        `SELECT * FROM resources WHERE type = '${type}'`,
        (err, res) => {
          if (err) return cb(err);
          console.log("res.rows: " + res.rows);
          cb(null, res.rows);
        }
      );
    }
  }
};

module.exports = getData;
