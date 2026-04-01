import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Style1.css";

function About() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/api/about")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <div 
        className="about-hero"
        style={{ backgroundImage: `url(${data.bannerImage})` }}
      >
        <div className="overlay">
          
          <div className="author">
            <img src={data.authorImage} alt="author" />
            <div>
              <h6>{data.authorName}</h6>
              <p>{data.authorRole}</p>
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
    </>
  );
}

export default About;