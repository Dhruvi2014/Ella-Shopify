const LandingProduct = require("../models/landingProductModel");

exports.getLandingProducts = async (req, res) => {

    try {

        const products = await LandingProduct.find();

        res.json(products);

    } catch (error) {

        res.status(500).json({ message: error.message })

    }

};


exports.addLandingProduct = async (req, res) => {

    try {

        const product = new LandingProduct(req.body);

        const savedProduct = await product.save();

        res.json(savedProduct);

    } catch (error) {

        res.status(500).json({ message: error.message })

    }

};