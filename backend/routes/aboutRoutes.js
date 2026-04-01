const express = require("express");
const router = express.Router();

const {
  getAbout,
  createAbout
} = require("../controllers/aboutController");

router.get("/", getAbout);
router.post("/", createAbout);

module.exports = router;