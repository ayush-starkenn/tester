const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  gender: {
    type: String,
    required: true,
  },

  disability: {
    type: String,
    required: true,
  },

  uuid: {
    type: String,
    required: true,
  },
});

const details = mongoose.model("details", schema);

module.exports = { details };
