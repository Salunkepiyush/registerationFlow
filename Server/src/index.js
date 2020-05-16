"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const config = require("./config/config.json");
const router = require("./route/router");
const mongoDB = "mongodb://localhost:27017/Test";
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(function (req, res, next) {
  // ToDo: Access restriction to be applied. Cant allow all the domain to access.
  res.header("Access-Control-Allow-Origin", "*");
  var allowedOrigins = ["localhost"];
  var origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Origin, X-Amz-Date, Authorization, X-Api-Key, X-Amz-Security-Token, Access-Control-Allow-Headers, X-Requested-With, Access-Control-Allow-Origin"
  );
  next();
});
app.use("", router);

db.on("error", (err) => {
  console.log(`Error in connection Mongo ${err}`);
});

app.listen(config.PORT, () => {
  console.log(`Server is started on ${config.PORT}`);
});
