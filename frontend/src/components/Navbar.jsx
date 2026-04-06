import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import "../Navbar.css";
import logo from "../assets/logo-black.png";
import SidebarLogin from "./SidebarLogin";
import CartSidebar from "./CartSidebar";
import { AuthContext } from "../context/AuthContext";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [megaOpen, setMegaOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const { wishlistCount, cartCount, isCartOpen, setIsCartOpen } = useContext(ShopContext);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);

  const handleProtectedAction = (e) => {
    if (!user) {
      e.preventDefault();
      alert("please logged in first");
    }
  };

  const navigate = useNavigate();


  return (
    <>
      <div className="topbar">
        End of season sale up to 50% off. <span>Shop Now</span>
      </div>

      <nav className="navbar navbar-expand-lg ella-navbar sticky-top">

        <div className="container-fluid">

          <a className="navbar-brand" href="/">
            <img src={logo} alt="ELLA" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarMenu">

            <ul className="navbar-nav mx-auto">


              <li className={`nav-item mega ${megaOpen ? "active" : ""}`}>
                <a
                  className="nav-link"
                  href="#"
                  onClick={() => setMegaOpen(!megaOpen)}
                >
                  THEME DEMO <span className="tag new">New</span>
                </a>
                <div className="mega-menu dropdown-menu">

                  <div className="row">

                    <div className="col-lg-3">
                      <h6>HOMEPAGES</h6>
                      <ul>
                        <li>Classic <span className="tag new">New</span></li>
                        <li>Trendy Style <span className="tag hot">Hot</span></li>
                        <li>High Fashion <span className="tag hot">Hot</span></li>
                        <li>SuperMarket <span className="tag hot">Hot</span></li>
                        <li>Electronics <span className="tag hot">Hot</span></li>
                        <li>Pet Supplies <span className="tag hot">Hot</span></li>
                        <li>Jewelry <span className="tag new">New</span></li>
                        <li>Automotive <span className="tag hot">Hot</span></li>
                        <li>Shoes <span className="tag new">New</span></li>
                        <li>Single Product <span className="tag hot">Hot</span></li>
                        <li>Chic Couture <span className="tag hot">Hot</span></li>
                        <li>Yoga <span className="tag hot">Hot</span></li>
                      </ul>
                    </div>

                    <div className="col-lg-3">
                      <h6>THEME HIGHLIGHTS</h6>
                      <ul>
                        <li>Shopify OS 3.0 <span className="tag new">New</span></li>
                        <li>42+ Unique Sections</li>
                        <li>Sections On Every Page</li>
                        <li>Section Groups</li>
                        <li>Multiple Headers</li>
                        <li>Multiple Footers</li>
                        <li>Powerful Configuration</li>
                        <li>Premium Features</li>
                        <li>Lifetime Free Updates</li>
                        <li>Dynamic Browser Tab</li>
                        <li>Image Behavior Effects</li>
                        <li>Positive Vibes Bundle</li>
                      </ul>
                    </div>

                    <div className="col-lg-3">
                      <h6>HIGHLIGHTED FEATURES</h6>
                      <ul>
                        <li>Exclusive Mobile Menu <span className="tag hot">Hot</span></li>
                        <li>Advanced Mega Menu</li>
                        <li>Quick Shop</li>
                        <li>Quick View</li>
                        <li>Multitasking Function</li>
                        <li>Mobile Sticky Toolbar</li>
                        <li>Mobile Headers</li>
                        <li>LookBook <span className="tag hot">Hot</span></li>
                        <li>Cart Drawer</li>
                        <li>Sections Effects</li>
                        <li>Video Slider</li>
                        <li>Combined Products Listing</li>
                      </ul>
                    </div>

                    <div className="col-lg-3">
                      <h6>HIGHLIGHTED FEATURES</h6>
                      <ul>
                        <li>Enhanced Instant Search</li>
                        <li>Multiple Currencies</li>
                        <li>Multiple Languages</li>
                        <li>Ask An Expert <span className="tag hot">Hot</span></li>
                        <li>Shipping Thresholds</li>
                        <li>Login Popup</li>
                        <li>Image Resize</li>
                        <li>Sticky Header</li>
                        <li>Marquee Function</li>
                        <li>Wishlist <span className="tag hot">Hot</span></li>
                        <li>GDPR Cookie</li>
                        <li>Recent Sales Popup</li>
                      </ul>
                    </div>

                  </div>

                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">COLLECTIONS</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  PRODUCT <span className="tag hot">Hot</span>
                </a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link" href="#">BLOG</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item">Blog Classic</a></li>
                  <li><a className="dropdown-item">Blog Simple</a></li>
                  <li><a className="dropdown-item">Blog Masonry</a></li>
                  <li><a className="dropdown-item">Blog Post With Products</a></li>
                  <li><a className="dropdown-item">Blog Post With Image Gallery</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link" href="#">PAGES</a>
                <ul className="dropdown-menu">
                  <li><Link to="/about" className="dropdown-item">
                    About Us
                  </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={() => navigate("/brands")}>
                      Brands
                    </a>
                  </li>
                  <li><Link className="dropdown-item" to="/contactus">
                    Contact Us
                  </Link></li>
                  <li><a className="dropdown-item" href="/faq">FAQs</a></li>
                  <li><a className="dropdown-item">Landing Pages</a></li>
                  <li><a className="dropdown-item">Lookbook</a></li>
                  <li><a className="dropdown-item">Wish list</a></li>
                </ul>
              </li>

              <li className="nav-item"><a className="nav-link">NEW IN</a></li>
              <li className="nav-item"><a className="nav-link">TREND</a></li>
              <li className="nav-item"><a className="nav-link">SHOP</a></li>

              <li className="nav-item buyella">
                <a className="nav-link" href="#">
                  BUY ELLA <span className="tag sale">Sale</span>
                </a>
              </li>

            </ul>

            <div className="nav-icons d-flex align-items-center gap-3">

              {user ? (
                <div
                  className="position-relative"
                  onMouseEnter={() => setProfileDropdown(true)}
                  onMouseLeave={() => setProfileDropdown(false)}
                >
                  <div className="rounded-circle bg-dark text-white d-flex justify-content-center align-items-center" style={{ width: '32px', height: '32px', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold' }}>
                    {user.firstName ? user.firstName.charAt(0).toUpperCase() : 'U'}
                  </div>
                  {profileDropdown && (
                    <div className="shadow bg-white p-3 position-absolute border" style={{ right: 0, top: '100%', minWidth: '200px', zIndex: 1000, borderRadius: '4px' }}>
                      <div className="text-secondary mb-2" style={{ fontSize: '0.85rem', wordBreak: 'break-all' }}>
                        {user.email}
                      </div>
                      <hr className="my-2" />
                      <button onClick={logout} className="btn btn-sm btn-outline-danger w-100 rounded-0">Logout</button>
                    </div>
                  )}
                </div>
              ) : (
                <i className="far fa-user" onClick={() => setIsLoginOpen(true)} style={{ cursor: 'pointer', fontSize: '20px' }}></i>
              )}
              <i className="fas fa-search" style={{ cursor: 'pointer', fontSize: '20px' }}></i>
              <i className="fas fa-globe" style={{ cursor: 'pointer', fontSize: '20px' }}></i>

              <div
                className="position-relative"
                onClick={() => {
                  if (!user) { alert("please logged in first"); return; }
                  window.location.href = "/wishlist";
                }}
                style={{ cursor: 'pointer' }}
              >
                <i className="far fa-heart" style={{ fontSize: '20px' }}></i>
                {wishlistCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '10px' }}>
                    {wishlistCount}
                  </span>
                )}
              </div>

              <div className="position-relative" onClick={() => setIsCartOpen(true)} style={{ cursor: 'pointer' }}>
                <i className="fas fa-shopping-bag" style={{ fontSize: '20px' }}></i>
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '10px' }}>
                    {cartCount}
                  </span>
                )}
              </div>

            </div>

          </div>

        </div>

      </nav>
      <SidebarLogin isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;