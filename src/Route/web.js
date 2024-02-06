const express = require("express");
const router = express.Router();
router.get("/", function (req, res) {
  res.send("Hello World! abcxyz");
});
router.get("/abc", function (req, res) {
  res.send("this is abc page");
});
router.get("/Cannie", function (req, res) {
  // res.send("<h1> hello Cannie</h1>");
  res.render("sample.ejs");
});
module.exports = router;
