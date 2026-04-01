import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Style1.css";

function About() {
  const [data, setData] = useState({});
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/about")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/api/info")
      .then(res => setInfo(res.data))
      .catch(err => console.log(err));
  }, []);

  

  const heroImage = data.bannerImage || "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80";
  const authorImage = data.authorImage || "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80";


   const [contact, setContact] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/contact-info")
      .then((res) => {
        setContact(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!contact) return null;

  return (
    <>
      <div 
        className="about-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="about-hero-overlay">
          
          <div className="author">
            <img src={authorImage} alt="author" />
            <div>
              <h6>{data.authorName || "Ella Store"}</h6>
              <p>{data.authorRole || "Fashion & Lifestyle"}</p>
            </div>
          </div>

          <h1>{data.title}</h1>

          <p className="desc">{data.description}</p>

          <button className="btn btn-light">MEET THE TEAM</button>
        </div>
      </div>

      <div className="breadcrumb-section text-center">
        <p>Home &gt; About us</p>
      </div>

      <div className="container text-center py-5">
        <h2 className="fw-bold mb-3">ABOUT US</h2>
        <p className="text-muted">
          Cosmo lacus meleifend menean diverra loremous. Nullam sit amet orci rutrum risus laoreet semper vel non magna...
        </p>
      </div>

      <div className="container py-5">

      <div className="row text-center mb-5">
        {info.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <i className={`${item.icon} fa-2x mb-3 icon-style`}></i>
            <h5 className="fw-bold">{item.title}</h5>
            <p className="text-muted">{item.description}</p>
            <a href="#" className="learn-link">Learn How</a>
          </div>
        ))}
      </div>

      <div className="row align-items-center">
        
        <div className="col-md-6 mb-4">
          <h4 className="fw-bold mb-3">ABOUT STORE</h4>
          <p className="text-muted">
            Quisquemos sodales suscipit tortor ditamecos condimentum de cosmo lacus 
            meleifend menean diverra loremous. Nullam sit amet orci rutrum risus laoreet 
            semper vel non magna.
          </p>
          <button className="btn btn-outline-dark mt-3">
            EXPLORE SHOP
          </button>
        </div>

        <div className="col-md-6">
          <div className="image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
              alt="store"
              className="img-fluid rounded"
            />
            <div className="play-btn">
              <i className="fas fa-play"></i>
            </div>
          </div>
        </div>

      </div>

    </div>

     <div className="contact-wrapper container-fluid">

      <div className="row">

        {/* Left Image */}
        <div className="col-lg-7 p-0">
          <div className="contact-image"></div>
        </div>

        {/* Right Content */}
        <div className="col-lg-5 contact-content">

          <h2 className="contact-title">CONTACT US</h2>

          <div className="contact-info">

            <p>
              <i className="fa-regular fa-comment"></i>
              TEXT: {contact.phone}
            </p>

            <p>
              <i className="fa-solid fa-location-dot"></i>
              {contact.email}
            </p>

            <p className="address">
              {contact.address}
            </p>

            <h6 className="hours-title">Opening Hours</h6>

            <p>MON to SAT: {contact.hours.monSat}</p>
            <p>SUN: {contact.hours.sun}</p>

          </div>

          <div className="contact-buttons">
            <button className="btn-outline">LIVE CHAT</button>
            <button className="btn-outline">CONTACT US</button>
          </div>

        </div>

      </div>

    </div>

    
    </>
  );
}

export default About;