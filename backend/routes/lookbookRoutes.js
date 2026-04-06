const express = require("express");
const router = express.Router();

const {
  getLookbook,
  createLookbook
} = require("../controllers/lookbookController");

router.get("/", getLookbook);
router.post("/", createLookbook);

module.exports = router;