import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const fetchCounts = async () => {
    try {
      const [wishRes, cartRes] = await Promise.all([
        fetch("http://localhost:5000/api/shop/wishlist"),
        fetch("http://localhost:5000/api/shop/cart")
      ]);
      
      if (wishRes.ok) {
        const wishData = await wishRes.json();
        setWishlistCount(wishData.length);
      }
      
      if (cartRes.ok) {
        const cartData = await cartRes.json();
        const totalCartItems = cartData.reduce((acc, item) => acc + item.quantity, 0);
        setCartCount(totalCartItems);
        setCartItems(cartData);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchCounts();
  }, []);

  return (
    <ShopContext.Provider value={{ wishlistCount, cartCount, cartItems, fetchCounts, isCartOpen, setIsCartOpen }}>
      {children}
    </ShopContext.Provider>
  );
};
