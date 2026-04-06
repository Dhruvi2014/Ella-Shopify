const Lookbook = require("../models/lookbookModel");

exports.getLookbook = async (req, res) => {
  try {
    const data = await Lookbook.findOne();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createLookbook = async (req, res) => {
  try {
    const newData = new Lookbook(req.body);
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};