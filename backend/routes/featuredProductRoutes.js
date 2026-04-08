const express = require("express");

const router = express.Router();

const featuredProductController = require("../controllers/featuredProductController");

router.get("/featured-products",featuredProductController.getFeaturedProducts);

router.post("/featured-products",featuredProductController.addFeaturedProduct);

module.exports = router;