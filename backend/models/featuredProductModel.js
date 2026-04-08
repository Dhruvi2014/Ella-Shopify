const mongoose = require("mongoose");

const featuredProductSchema = new mongoose.Schema({

brand:String,
name:String,
price:String,
image:String

});

module.exports = mongoose.model("FeaturedProduct",featuredProductSchema);