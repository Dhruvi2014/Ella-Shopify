const express = require("express");
const router = express.Router();

const {
  getMenItems,
  createMenItem
} = require("../controllers/menItemController");

router.get("/", getMenItems);
router.post("/", createMenItem);

module.exports = router;