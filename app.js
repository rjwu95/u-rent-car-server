require("dotenv").config();
require("@babel/register")({ extensions: [".js", ".ts"] });
module.exports = require("./src/server");
