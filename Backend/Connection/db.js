const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGO_URL;

const db = mongoose.connect(url).then((res, err) => {
  if (err) {
    console.log("error connecting to db check db.js in Connection folder");
  } else {
    console.log("successfully connected to database");
  }
});

module.exports = db;
