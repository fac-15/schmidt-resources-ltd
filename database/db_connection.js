const { Pool } = require("pg");
const url = require("url");
require("env2")("./config.env");

if (!process.env.DB_URL) throw new Error("Environment variable not found");

const params = url.parse(process.env.DB_URL);
const [username, password] = params.auth.split(":");

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname("/")[1],
  max: process.env.DB_MAX_CONNECTIONS || 2,
  user: username,
  password,
  ssl: params.hostname !== "localhost"
};

module.exports = new Pool(options);