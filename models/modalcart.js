const mongoose = require("mongoose");

const alldata = new mongoose.Schema({
  CategoryName: String,
});

const dataitem = new mongoose.model("foodcates", alldata);

module.exports = dataitem;
