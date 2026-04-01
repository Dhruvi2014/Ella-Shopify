const contactData = require("../models/contactModel");

exports.getContactInfo = (req, res) => {
  res.status(200).json({
    success: true,
    data: contactData
  });
};