const handler = require("./handler.js");
// const getData = require("./getData.js");
const routes = ["/style.css", "/main.js", "/index.html"];

const router = (req, res) => {
  const url = req.url;
  if (url === "/") {
    console.log("home is home");
    handler.home(req, res);
  } else if (routes.includes(url)) {
    console.log("./public/index.html");
    handler.public(req, res, url);
  } else if (url.includes("dynamic")) {
    console.log(url);
    handler.dynamic(req, res, url);
  } else if (url.includes("find")) {
    console.log("THIS IS THE ", req);
    handler.find(req, res, url);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("404, file not found!");
    console.log("404");
  }
};

module.exports = router;
