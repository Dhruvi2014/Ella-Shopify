const express = require("express");

const router = express.Router();

const landingController = require("../controllers/landingProductController");

router.get("/landing-products",landingController.getLandingProducts);

router.post("/landing-products",landingController.addLandingProduct);

module.exports = router;