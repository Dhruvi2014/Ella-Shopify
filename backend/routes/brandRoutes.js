const express = require("express");
const router = express.Router();
const {
  getAllBrands,
  getBrandsByLetter
} = require("../controllers/brandController");

router.get("/", getAllBrands);
router.get("/:letter", getBrandsByLetter);

module.exports = router;