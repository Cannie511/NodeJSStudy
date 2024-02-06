require("dotenv").config();
const express = require("express");
const configViewEngine = require("./config/viewEgine");
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
const webRoute = require("./Route/web");
//config template
configViewEngine(app);

//Route
app.use("/", webRoute);

app.listen(port, hostname, () => {
  console.log(`Example app litsening on port ${port}`);
});
