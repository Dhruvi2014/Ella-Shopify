const express = require("express");
const router = express.Router();
const {
  getInfo,
  createInfo,
} = require("../controllers/infoController");

router.get("/", getInfo);
router.post("/", createInfo);

module.exports = router;