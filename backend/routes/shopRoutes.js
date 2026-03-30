const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shopController");

// existing dummy redirect
router.get("/shop-all-products", shopController.getShopPage);

// new robust endpoints for ShopAll dynamic data
router.get("/products", shopController.getShopProducts);
router.post("/add", shopController.addShopProduct);
router.post("/add-to-cart", shopController.addToCart);
router.post("/add-to-wishlist", shopController.addToWishlist);
router.get("/wishlist", shopController.getWishlist);
router.delete("/wishlist/:id", shopController.removeFromWishlist);
router.get("/cart", shopController.getCart);
router.delete("/cart/:id", shopController.removeFromCart);
router.put("/cart/:id", shopController.updateCartQuantity);

module.exports = router;