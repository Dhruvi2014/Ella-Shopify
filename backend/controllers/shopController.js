const ShopProduct = require("../models/ShopProduct");
const Wishlist = require("../models/Wishlist");

exports.getShopPage = (req, res) => {
    res.json({
        success: true,
        redirectUrl: "/collections/classic-all"
    });
};

exports.getShopProducts = async (req, res) => {
  try {
    const products = await ShopProduct.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addShopProduct = async (req, res) => {
  try {
    const { name, price, oldPrice, image, colors, badge } = req.body;

    const newShopProduct = new ShopProduct({ name, price, oldPrice, image, colors, badge });
    await newShopProduct.save();

    res.status(201).json(newShopProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const Cart = require("../models/Cart");

exports.addToCart = async (req, res) => {
  try {
    const { productId } = req.body;
    let existing = await Cart.findOne({ productId });
    if (existing) {
      existing.quantity += 1;
      await existing.save();
    } else {
      await new Cart({ productId, quantity: 1 }).save();
    }
    res.status(200).json({ success: true, message: "Added to cart successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCart = async (req, res) => {
  try {
    const items = await Cart.find().populate('productId');
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    await Cart.findOneAndDelete({ productId: req.params.id });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateCartQuantity = async (req, res) => {
  try {
    const { action } = req.body; 
    let cartItem = await Cart.findOne({ productId: req.params.id });
    
    if (cartItem) {
      if (action === 'increase') {
        cartItem.quantity += 1;
        await cartItem.save();
      } else if (action === 'decrease') {
        cartItem.quantity -= 1;
        if (cartItem.quantity <= 0) {
          await Cart.findOneAndDelete({ productId: req.params.id });
        } else {
          await cartItem.save();
        }
      }
    }
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.addToWishlist = async (req, res) => {
  try {
    const { productId } = req.body;
    
    const existing = await Wishlist.findOne({ productId });
    if (!existing) {
       await new Wishlist({ productId }).save();
    }

    res.status(200).json({ success: true, message: "Added to wishlist successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getWishlist = async (req, res) => {
  try {
    const items = await Wishlist.find().populate('productId');
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.removeFromWishlist = async (req, res) => {
  try {
    await Wishlist.findOneAndDelete({ productId: req.params.id });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

