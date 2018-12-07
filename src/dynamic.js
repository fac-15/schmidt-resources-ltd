const dbConnection = require("../database/db_connection");
const dynamic = require("./handler");

const getData = (type, skill, level, cb) => {
  console.log(type);
  console.log(skill);
  console.log(level);

  dbConnection.query(`SELECT * FROM resources`, (err, res) => {
    if (err) return cb(err);
    console.log("res.rows: " + res.rows);
    cb(null, res.rows);
  });
};

const filterData = (type, skill, level, cb) => {
  console.log(type);
  console.log(skill);
  console.log(level);

  dbConnection.query(
    `SELECT name, location from resources WHERE TYPE = ${type} `,
    (err, res) => {
      if (err) return cb(err);
      console.log("res.rows: " + res.rows);
      cb(null, res.rows);
    }
  );
};

module.exports = { getData, filterData };
