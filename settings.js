const packageJSON = require("./package.json");

const DEV_MODE =
  !process.env.NODE_ENV &&
  (process.env.NODE_ENV !== "production" || process.env.NODE_ENV !== "staging");
const SERVER_PORT = process.env.SERVER_PORT || 4040;
const BUILD_VERSION = process.env.BUILD_VERSION || "local";
const DATA_ENVIRONMENT = ""
let { APP_API } = process.env;

 APP_API = "http://localhost:4040";

const settings = {
  DEV_MODE,
  SERVER_PORT,
  APP_NAME: packageJSON.name,
  APP_VERSION: BUILD_VERSION,
  APP_DESCRIPTION: packageJSON.description,
  APP_AUTHOR: packageJSON.author,
  CLIENTJS: `${packageJSON.name}`,
  APP_API
};

module.exports = settings;
