const mongoose = require("mongoose");

const infoSchema = new mongoose.Schema({
  title: String,
  description: String,
  icon: String,
});

module.exports = mongoose.model("Info", infoSchema);