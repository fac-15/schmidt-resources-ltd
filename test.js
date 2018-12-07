const tape = require("tape");
const runDbBuild = require("./database/db_build.js");
const dynamic = require("./src/dynamic.js");

tape("testing tape", t => {
  t.equal(1, 1, "tape works !");
  t.end();
});

tape("test getData function", t => {
  runDbBuild(function(err, res) {
    if (err) return console.log("error in runDbBuild: " + err);
    dynamic.getData(function(err, res) {
      if (err) return console.log("error in getData: " + err);
      t.equals(
        res[3].name,
        "harry",
        "should return the name harry (name of the fourth resource)"
      );
      t.end();
    });
  });
});
