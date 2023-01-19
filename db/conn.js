const { application } = require("express");
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://rupesh:rupesh123@cluster0.qnokyoh.mongodb.net/gofood?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useUnifiedTopology: true,
    }
  )
  .then((data) => {
    console.log("connection done");
  })
  .catch((e) => {
    console.log(e);
  });
