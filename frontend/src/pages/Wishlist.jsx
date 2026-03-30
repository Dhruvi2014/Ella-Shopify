import React, { useState, useEffect, useContext } from 'react';
import model1 from "../assets/model1.png";
import model2 from "../assets/model2.png";
import model3 from "../assets/model3.png";
import "../Style.css"; 
import { ShopContext } from '../context/ShopContext';

const imageMap = {
  model1,
  model2,
  model3
};

function Wishlist() {
  const { fetchCounts } = useContext(ShopContext);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchWishlist = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/shop/wishlist");
      if (response.ok) {
        const data = await response.json();
        setWishlistItems(data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  const handleRemove = async (productId) => {
    try {
      await fetch(`http://localhost:5000/api/shop/wishlist/${productId}`, {
        method: "DELETE"
      });
      fetchWishlist(); 
      fetchCounts(); 
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) {
    return <div className="text-center mt-5"><div className="spinner-border"></div></div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center">My Wishlist</h2>
      
      {wishlistItems.length === 0 ? (
        <div className="text-center">
          <p className="mt-4 text-muted">Your wishlist is currently empty.</p>
          <a href="/collections/classic-all" className="btn btn-dark mt-3">CONTINUE SHOPPING</a>
        </div>
      ) : (
        <div className="row mt-5">
          {wishlistItems.map((item) => {
            const product = item.productId;
            if(!product) return null; 
            
            return (
              <div key={item._id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div className="shop-product-card">
                  <div className="shop-product-img-wrapper">
                    {product.badge && <div className="shop-product-badge">{product.badge}</div>}
                    <img
                      src={imageMap[product.image] || model1}
                      alt={product.name}
                      className="shop-product-img"
                    />
                    <div className="shop-product-action-icons">
                      <button className="shop-action-btn" title="Remove" onClick={() => handleRemove(product._id)}>
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                  
                  <div className="shop-product-info text-center">
                    <h3 className="shop-product-title mt-2">{product.name}</h3>
                    <div className="shop-product-price mt-1">
                      {product.oldPrice ? (
                        <>
                          <span className="shop-product-old-price">Rs. {product.oldPrice.toFixed(2)}</span>
                          <span>Rs. {product.price.toFixed(2)}</span>
                        </>
                      ) : (
                        <span>Rs. {product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
