const express = require("express");
const router = express.Router();

const {createContactUs} = require("../controllers/contactusController");
const {protect} = require("../middleware/authMiddleware");

router.post("/",protect,createContactUs);

module.exports = router;