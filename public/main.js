// module.exports =

// function request(url, cb) {
//   var xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       console.log(response);
//       cb(null, xhr.responseText);
//     } else {
//       cb("error" + xhr.responseType);
//     }
//   };
//   xhr.open("POST", "/find", true);
//   xhr.send();
// }

// document.getElementById("form").addEventListener("submit", e => {
//   e.preventDefault();
// var getType = document.getElementById("type_list").value;
// var getSkill = document.getElementById("skill_list").value;
// var getLevel = document.getElementById("level_list").value;

// var queryString = [getType, getSkill, getLevel].map(e => parseInt(e, 10));
// request(queryString);

// console.log("THIS IS A REQUEST" + queryString);
// });
