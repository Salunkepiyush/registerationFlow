"use strict";
const express = require("express");
const router = express.Router();

const URL = require("../config/url.json");
const controller = require("../controller/controller");

router.get(URL.HEALTH, (req, res) => {
  res.status(200).send({ status: "Service is up and running" });
});

router.post(URL.AUTHENTICATE, controller.authenticate);
router.post(URL.SAVE_USER, controller.saveUser);

module.exports = router;
