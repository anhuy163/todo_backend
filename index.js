const todoRoute = require("./routes/route.todo");
const express = require("express");
const cors = require("cors");
const app = express();
const database = require("./database");
const PORT = 5000;

// app.get("/", function (req, res) {
//   let query = "SELECT * FROM employees";
//   database.query(query, function (err, results) {
//     if (err) throw err;
//     res.send(results);
//   });
//   //   res.send("Hello mother fucker !!!");
// });
// app.get("/todo", function (req, res) {
//   let query = "SELECT * FROM employees";
//   database.query(query, function (err, results) {
//     if (err) throw err;
//     res.send(results);
//   });
// });
app.use(express.json());
app.use(cors());
app.use("/", todoRoute);

app.listen(PORT, function () {
  console.log(`Connected to the port ${PORT}`);
  database.connect(function (err) {
    if (err) console.log("Error happend:", err);
    console.log("Connected to the database");
  });
});
