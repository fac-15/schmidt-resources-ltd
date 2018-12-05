const handler = require("./handler.js");

const routes = ["/style.css", "/main.js", "/index.html"];

const router = (req, res) => {
  const url = req.url;
  if (url === "/") {
    console.log("home is home");
    handler.home(req, res);
  } else if (routes.includes(url)) {
    console.log("./public/index.html");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("404, file not found!");
    console.log("404");
  }
};

module.exports = router;
