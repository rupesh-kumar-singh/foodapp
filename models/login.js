const mongoose = require("mongoose");
const validator = require("validator");
const logindata = new mongoose.Schema({
  name: {
    type: String,
    required: true,

    validator(value) {
      if (!validator.isEmpty(value)) {
        throw new Error("name must be greater");
      }
    },
  },
  location: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "email id is already exist"],
    validator(value) {
      if (!validator.isEmail(value)) {
        throw new Error("not valid email");
      }
    },
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const login = new mongoose.model("logins", logindata);

module.exports = login;
