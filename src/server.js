require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEgine");
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const webRoute = require("./Route/web");
const mysql = require("mysql2");
//config template
configViewEngine(app);

//Route
app.use("/", webRoute);

//test connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "hoidanit",
  port: 3307, // default 3306
});
connection.query("SELECT  * from Users u ", function (err, result, fields) {
  console.log(">>> check result: ",result);
  console.log(">>> check fields: ",fields)
  
});
app.listen(port, hostname, () => {
  console.log(`Example app litsening on port ${port}`);
});
