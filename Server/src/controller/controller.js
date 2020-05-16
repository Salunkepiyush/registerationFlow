"use strict";
const user_service = require("../service/user_service");

const User = require("../models/user");

module.exports = {
  authenticate: async (req, res) => {
    try {
      if (req.body.userName && req.body.password) {
        let data = await user_service.authenticateService(req.body, User);
        if (data) {
          return res.status(200).send(data);
        }
      } else {
        return res.status(400).send({ message: "Invalid Input data" });
      }
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  saveUser: async (req, res) => {
    try {
      if (req.body) {
        let data = await user_service.saveUserService(req.body, User);
        if (data) {
          return res.status(201).send(data);
        }
      } else {
        return res.status(400).send({ message: "Invalid Input data" });
      }
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
};
