const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
  title: String,
  description: String,
  authorName: String,
  authorRole: String,
  authorImage: String,
  bannerImage: String
});

module.exports = mongoose.model("About", aboutSchema);