const fs = require("fs");
const path = require("path");
const request = require("request");
const getData = require("./dynamic.js");
const querystring = require("querystring");

const serverError = (error, response) => {
  response.writeHead(500, { "Content-Type": "text/html" });
  response.end("<h1> sorry there was an error loading sever </h1>");
  console.log(error);
};

const home = (request, response) => {
  const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (error, file) => {
    if (error)
      //return serverError(error, response);
      response.writeHead(200, { "Content-Type": "text/html" });
    response.end(file);
  });
};

const public = (request, response, url) => {
  const ext = url.split(".")[1];
  const extType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    ico: "image/x-ico",
    jpg: "image/jpeg",
    png: "image/png"
  };

  const filePath = path.join(__dirname, "..", "public", url);

  fs.readFile(filePath, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(500, { "Content-Type": "text/html" });
      response.end("<h1> we've hit and error </h1>");
    } else {
      response.writeHead(200, { "Content-Type": `${extType[ext]}` });
      response.end(file);
    }
  });
};

const dynamic = (request, response, url) => {
  const obj = querystring.parse(url);
  console.log(obj);

  const type = obj["/?type_list"];
  const skill = obj["skill_list"];
  const level = obj["level_list"];

  // console.log(type);
  // console.log(skill);
  // console.log(level);

  getData(type, skill, level, (err, res) => {
    if (err) return console.log(err);
    let dynamicData = JSON.stringify(res);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(dynamicData);
  });
};

// const find = (request, response) => {
//   getData((err, res) => {
//     if (err) {
//       console.log(err);
//       response.writeHead(500, { "Content-Type": "text/html" });
//       response.end("<h1>Sorry!!</h1>");
//     } else {
//       let output = JSON.stringify(res);

//       response.writeHead(200, { "Content-Type": "application/json" });
//       response.end(output);
//     }
//   });
// };

// module.exports = { serverError, home, public, dynamic, find };

module.exports = { serverError, home, public, dynamic };
