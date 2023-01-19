const express = require("express");
const router = new express.Router();
const login = require("../models/login");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtsecret = "rupeshsinghkumarkonikhurdrollnorewa";

router.post(
  "/createuser",

  body("email").isEmail(),
  body("password", "incorect password").isLength({ min: 5 }),
  body("name", "name must be lenght greater then 5").isLength({ min: 5 }),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secpassword = await bcrypt.hash(req.body.password, salt);
    try {
      const user = new login({
        name: req.body.name,
        password: secpassword,
        email: req.body.email,
        location: req.body.location,
      });
      const datass = await user.save();
      res.status(200).send({ success: true });
    } catch (e) {
      res.status(400).send({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  body("email").isEmail(),
  body("password", "incorect password").isLength({ min: 5 }),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const reqdata = req.body.email;

      const user = await login.findOne({ email: reqdata });

      if (!user) {
        return res
          .status(400)
          .send({ error: "try logging with correct credential" });
      }
      const pwcompare = await bcrypt.compare(req.body.password, user.password);
      if (!pwcompare) {
        return res
          .status(400)
          .send({ error: "try logging with correct credential" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(data, jwtsecret);
      res.status(200).send({ success: true, authtoken: authtoken });
    } catch (e) {
      res.send({ success: false });
    }
  }
);

module.exports = router;
