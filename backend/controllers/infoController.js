const Info = require("../models/Info");

exports.getInfo = async (req, res) => {
  try {
    const data = await Info.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createInfo = async (req, res) => {
  try {
    const newData = new Info(req.body);
    const saved = await newData.save();
    res.json(saved);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};