import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import model1 from "../assets/model1.png";
import model2 from "../assets/model2.png";
import model3 from "../assets/model3.png";
import "../Style.css"; 

const imageMap = {
  model1,
  model2,
  model3
};

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, fetchCounts } = useContext(ShopContext);

  const handleRemove = async (productId) => {
    try {
      await fetch(`http://localhost:5000/api/shop/cart/${productId}`, {
        method: "DELETE"
      });
      fetchCounts();
    } catch (e) {
      console.error(e);
    }
  };

  const handleUpdateQuantity = async (productId, action) => {
    try {
      await fetch(`http://localhost:5000/api/shop/cart/${productId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action })
      });
      fetchCounts();
    } catch (e) {
      console.error(e);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => {
      const price = item.productId?.price || 0;
      return acc + (price * item.quantity);
    }, 0);
  };

  const total = calculateTotal();
  const freeShippingThreshold = 75000; // Example threshold
  const awayFromShipping = freeShippingThreshold - total;
  const progressPercent = Math.min(100, (total / freeShippingThreshold) * 100);

  return (
    <div className={`cart-sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`} onClick={e => e.stopPropagation()}>
        
        <div className="cart-header">
          <div>
            <h3>Your cart</h3>
            <p className="cart-count-txt">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</p>
          </div>
          <button className="cart-close-btn" onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
        </div>

        <div className="cart-shipping-bar">
          <i className="fa-solid fa-truck-fast text-danger fa-lg mb-1" style={{marginLeft: `${Math.max(0, progressPercent - 5)}%`}}></i>
          <div className="progress" style={{height: "8px", borderRadius: "10px", backgroundColor:"#dcdcdc"}}>
            <div className="progress-bar bg-danger" role="progressbar" style={{width: `${progressPercent}%`}}></div>
          </div>
          <p className="shipping-text mt-2 text-muted">
            {awayFromShipping > 0 
              ? `Only Rs. ${awayFromShipping.toLocaleString(undefined, { minimumFractionDigits: 2 })} away from Free Shipping` 
              : "Congratulations! You've got free shipping!"}
          </p>
        </div>

        <div className="cart-items-container">
          {cartItems.length === 0 ? (
            <div className="text-center mt-5 mb-5 text-muted">Your cart is empty.</div>
          ) : (
            cartItems.map(item => {
              const p = item.productId;
              if (!p) return null;
              
              return (
                <div className="cart-item" key={item._id}>
                  <img src={imageMap[p.image] || model1} alt={p.name} className="cart-item-img" />
                  <div className="cart-item-details">
                    <div className="d-flex justify-content-between">
                      <h5 className="cart-item-title">{p.name}</h5>
                      <span className="cart-item-price-top">Rs. {p.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                    </div>
                    <p className="cart-item-options">Camel / S <i className="fa-regular fa-pen-to-square ms-1"></i></p>
                    <p className="cart-item-price-bottom">Rs. {p.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
                    
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <div className="cart-quantity-selector">
                        <button className="qty-btn" onClick={() => handleUpdateQuantity(p._id, 'decrease')}><i className="fa-solid fa-minus"></i></button>
                        <span className="qty-num">{item.quantity}</span>
                        <button className="qty-btn" onClick={() => handleUpdateQuantity(p._id, 'increase')}><i className="fa-solid fa-plus"></i></button>
                      </div>
                      <button className="cart-item-remove" onClick={() => handleRemove(p._id)}>
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
          
          <div className="you-may-like">
            <h4>You May Also Like</h4>
            <div className="d-flex align-items-center gap-3 mt-3">
              <img src={model1} alt="sweatshirt" style={{width: "100px"}} />
              <div>
                <h6 style={{fontSize:"14px"}}>Quarter-Zip Sweatshirt</h6>
                <p className="m-0" style={{fontSize:"13px"}}>From Rs. 6,300.00</p>
                <div className="d-flex gap-2 mt-1">
                  <span className="shop-color-swatch bg-white border"></span>
                  <span className="shop-color-swatch bg-success"></span>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center gap-4 mt-3 text-muted">
              <i className="fa-solid fa-arrow-left-long" style={{cursor: "pointer"}}></i>
              <i className="fa-solid fa-arrow-right-long text-dark" style={{cursor: "pointer"}}></i>
            </div>
          </div>
        </div>

        <div className="cart-footer">
          <div className="cart-action-icons">
            <div className="cart-footer-icon"><i className="fa-regular fa-clipboard"></i></div>
            <div className="cart-footer-icon"><i className="fa-solid fa-gift"></i></div>
            <div className="cart-footer-icon"><i className="fa-solid fa-truck"></i></div>
            <div className="cart-footer-icon border-end-0"><i className="fa-solid fa-tag"></i></div>
          </div>
          
          <div className="d-flex justify-content-between font-weight-bold mt-3">
            <h5 className="mb-0 font-weight-bold" style={{fontWeight: 800}}>ESTIMATED TOTAL</h5>
            <h5 className="mb-0 font-weight-bold" style={{fontWeight: 800}}>Rs. {total.toLocaleString(undefined, { minimumFractionDigits: 2 })} INR</h5>
          </div>
          <p className="text-muted mt-2 mb-3" style={{fontSize: "12px"}}>Taxes, discounts and shipping calculated at checkout.</p>
          
          <button className="btn btn-dark w-100 py-3" style={{fontWeight: 600, letterSpacing: "1px"}}>CHECKOUT</button>
        </div>
        
      </div>
    </div>
  );
};

export default CartSidebar;
