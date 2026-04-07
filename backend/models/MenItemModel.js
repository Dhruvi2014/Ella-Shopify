const mongoose = require("mongoose");

const menItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  brand: String,
  price: Number,
  oldPrice: Number,
  image: String,
  badge: String
}, { timestamps: true });

module.exports = mongoose.model("MenItem", menItemSchema);