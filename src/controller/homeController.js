const getHomepage = (req, res) => {
  res.send("Hello World! abcxyz");
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
  getCannie
};
