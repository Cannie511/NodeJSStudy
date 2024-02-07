const express = require("express");
const { getHomepage, getAbc, getCannie } = require("../controller/homeController");
const router = express.Router();
router.get("/", getHomepage);
router.get("/abc", getAbc);
router.get("/Cannie", getCannie)
module.exports = router;
