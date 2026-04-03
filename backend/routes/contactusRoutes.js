const express = require("express");
const router = express.Router();

const {
  createContactUs,
  getContactUs
} = require("../controllers/contactusController");

const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createContactUs);

router.get("/", protect, getContactUs);

module.exports = router;