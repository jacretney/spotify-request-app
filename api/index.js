require = require("esm")(module)
require('dotenv').config();

module.exports = require("./http/server.js")