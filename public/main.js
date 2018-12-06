// const getData = require("./getData.js");

document.getElementById("search_btn").addEventListener("click", function a() {
  var getType = document.getElementById("type_list").value;
  var getSkill = document.getElementById("skill_list").value;
  var getLevel = document.getElementById("level_list").value;

  var queryString = [getType, getSkill, getLevel].map(e => parseInt(e, 10));

  console.log(queryString);
  getData();
});
