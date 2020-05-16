"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  userName: {
    type: String,
    required: [true, " is required"],
    unique: [true, "User Already exist"],
  },
  password: { type: String, required: [true, " is required"] },
  firstName: { type: String, required: [true, " is required"] },
  lastName: { type: String, required: [true, " is required"] },
  gender: { type: String, required: [true, " is required"] },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

var User = mongoose.model("Users", userSchema, "Users");

module.exports = User;
