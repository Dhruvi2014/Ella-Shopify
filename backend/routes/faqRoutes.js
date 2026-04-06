const express = require("express");
const router = express.Router();
const faqController = require("../controllers/faqController");

router.get("/faqs", faqController.getFaqs);
router.post("/faqs", faqController.addFaq);

module.exports = router;