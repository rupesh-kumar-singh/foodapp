const express = require("express");
const router = new express.Router();
const login = require("../models/modalitem");

router.post(
  "/fooddata",

  async (req, res) => {
    try {
      const user = await login.find({});

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
