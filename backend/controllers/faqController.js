const FAQ = require("../models/faqModel");

exports.getFaqs = async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addFaq = async (req, res) => {
  try {
    const faq = new FAQ(req.body);
    const savedFaq = await faq.save();
    res.json(savedFaq);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};