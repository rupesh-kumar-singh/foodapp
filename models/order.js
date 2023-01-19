const mongoose = require("mongoose");

const orderdata = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  order_data: {
    type: Array,
    required: true,
  },
});

const order = new mongoose.model("orders", orderdata);

module.exports = order;
