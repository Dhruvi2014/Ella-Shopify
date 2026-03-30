const mongoose = require("mongoose");

const shopProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  oldPrice: { type: Number },
  image: { type: String, required: true },
  colors: [String],
  badge: String
});

module.exports = mongoose.model("ShopProduct", shopProductSchema);
