const mongoose = require("mongoose");

const LandingProductSchema = new mongoose.Schema({

    brand: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    price: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("LandingProduct", LandingProductSchema);