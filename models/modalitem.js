const mongoose = require("mongoose");

const alldata = new mongoose.Schema({
  CategoryName: String,
  name: String,
  img: String,
  options: Array,
  description: String,
});

const datacart = new mongoose.model("foods", alldata);

module.exports = datacart;
