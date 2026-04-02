const Brand = require("../models/Brand");

exports.getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.find().sort({ name: 1 });
    res.json(brands);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBrandsByLetter = async (req, res) => {
  try {
    const { letter } = req.params;

    if (letter === "ALL") {
      const brands = await Brand.find().sort({ name: 1 });
      return res.json(brands);
    }

    const brands = await Brand.find({
      firstLetter: letter.toUpperCase()
    }).sort({ name: 1 });

    res.json(brands);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};