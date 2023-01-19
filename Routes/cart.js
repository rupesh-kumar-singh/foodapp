const express = require("express");
const router = new express.Router();
const cartdata = require("../models/modalcart");

router.post(
  "/foodcart",

  async (req, res) => {
    try {
      const user = await cartdata.find({});

      if (!user) {
        return res.status(400).send({ success: false });
      }

      if (user) {
        res.send(user);
      }
    } catch (e) {
      res.send({ success: false });
    }
  }
);

module.exports = router;
