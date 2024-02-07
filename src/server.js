require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEgine");
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const webRoute = require("./Route/web");
const connection = require("./config/Database")
//config template
configViewEngine(app);

//Route
app.use("/", webRoute);


connection.query("SELECT  * from Users u ", function (err, result, fields) {
  console.log(">>> check result: ",result);
  // console.log(">>> check fields: ",fields)
  
});
app.listen(port, hostname, () => {
  console.log(`Example app litsening on port ${port}`);
});
