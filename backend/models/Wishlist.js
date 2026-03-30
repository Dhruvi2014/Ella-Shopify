const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'ShopProduct', required: true }
});

module.exports = mongoose.model("Wishlist", wishlistSchema);
