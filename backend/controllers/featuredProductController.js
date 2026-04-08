const FeaturedProduct = require("../models/featuredProductModel");

exports.getFeaturedProducts = async(req,res)=>{

try{

const products = await FeaturedProduct.find();

res.json(products);

}catch(error){

res.status(500).json({message:error.message});

}

};


exports.addFeaturedProduct = async(req,res)=>{

try{

const product = new FeaturedProduct(req.body);

await product.save();

res.json(product);

}catch(error){

res.status(500).json({message:error.message});

}

};