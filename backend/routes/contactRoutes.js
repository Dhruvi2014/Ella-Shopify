const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router.get("/contact-info", contactController.getContactInfo);

module.exports = router;