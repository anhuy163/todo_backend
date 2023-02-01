const mysql = require("mysql");
const database = mysql.createConnection({
  host: "localhost",
  database: "mydb",
  user: "root",
  password: "1632001huy",
});

module.exports = database;
