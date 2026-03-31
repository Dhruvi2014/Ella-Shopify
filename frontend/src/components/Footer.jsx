import React from "react";
import "../Footer.css";

import ellaLogo from "../assets/logo-black.png";      
import paymentImg from "../assets/footer.jpeg";     

function Footer() {
  return (
    <footer className="footer mt-5">
      <div className="container">
        <div className="row">

          <div className="col-lg-4 col-md-6 mb-4">
            <h6 className="footer-title">NEWSLETTER SIGN UP</h6>
            <p className="footer-text">
              Sign up for new arrivals, offers, and more!
            </p>

            <div className="newsletter-box">
              <input type="email" placeholder="Email Address" />
              <button>
                <i className="fa fa-arrow-right"></i>
              </button>
            </div>

            <div className="social-icons mt-3">
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-pinterest-p"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="footer-title">SHOP</h6>
            <ul>
              <li>New In</li>
              <li>Women</li>
              <li>Men</li>
              <li>Shoes</li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="footer-title">ABOUT</h6>
            <ul>
              <li>Our Story</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="footer-title">HELP</h6>
            <ul>
              <li>Sizing Help</li>
              <li>Returns & Exchanges</li>
              <li>Shipping</li>
              <li>Theme FAQs</li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="footer-title">CONTACT US</h6>
            <ul className="contact-info">
              <li>EXT: (091)-123-ELLA</li>
              <li>mail@domain.com</li>
              <li>685 Market Street</li>
              <li>San Francisco, CA 94105.</li>
            </ul>
          </div>

        </div>

        <div className="footer-logo ">
          <img src={ellaLogo} alt="ELLA" />
        </div>

        <div className="footer-bottom d-flex flex-wrap justify-content-between align-items-center">

          <p>
            © 2025, <span className="brand">ELLA 7</span>. POWERED BY SHOPIFY.
            SHOPIFY THEMES BY HALOTHEMES.
          </p>

          <div className="payment">
            <img src={paymentImg} alt="Payments" />
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;