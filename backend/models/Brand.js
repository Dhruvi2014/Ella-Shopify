const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  name: { type: String, required: true },
  logo: { type: String }, 
  firstLetter: { type: String }
});

module.exports = mongoose.model("Brand", brandSchema);