const MenItem = require("../models/MenItemModel");

exports.getMenItems = async (req, res) => {
  try {
    const items = await MenItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createMenItem = async (req, res) => {
  try {
    const newItem = new MenItem(req.body);
    await newItem.save();
    res.json(newItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};