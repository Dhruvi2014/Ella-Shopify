const mongoose = require("mongoose");

const lookbookSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  description: String,
  buttonText: String,
  bannerImage: String,
  images: [String] 
});

module.exports = mongoose.model("Lookbook", lookbookSchema);