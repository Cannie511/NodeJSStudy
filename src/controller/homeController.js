const connection = require("../config/Database");



const getHomepage = (req, res) => {
  let users = [];

  connection.query("SELECT  * from Users u ", function (err, result, fields) {
    users = result
    console.log(">>> check result: ", result);

    console.log(">>> check users: ", users)

    //stringify là convert mảng thành string 
    res.send(JSON.stringify(users));
  });
  
};
const getAbc = (req, res) => {
  res.send(">>Check Abc!");
};
const getCannie = (req, res) => {
  res.render("sample.ejs");
};
module.exports = {
  getHomepage,
  getAbc,
  getCannie,
};
