import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Style1.css";

const Lookbook = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/lookbook")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  if (!data) return <h2>Loading...</h2>;

  return (
    <div className="lookbook container">

      <div className="row align-items-center top-section">
        <div className="col-md-6 text-section">
          <h1>{data.title}</h1>
          <h5>{data.subtitle}</h5>
          <p>{data.description}</p>
          <button className="btn btn-dark">{data.buttonText}</button>
        </div>

        <div className="col-md-6">
          <img src={data.bannerImage} alt="" className="img-fluid" />
        </div>
      </div>

      <div className="row mt-5 g-4 align-items-stretch">
        <div className="col-md-6">
          <div className="row g-4 h-100">
            {data.images.slice(0, 4).map((img, index) => (
              <div className="col-6" key={`small-1-${index}`}>
                <div className="image-card h-100">
                  <img src={img} alt="" className="img-fluid w-100 h-100" style={{ objectFit: "cover" }} />
                  <div className="overlay">
                    <i className="fa fa-plus"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-6">
          {data.images[4] && (
            <div className="image-card h-100">
              <img src={data.images[4]} alt="" className="img-fluid w-100 h-100" style={{ objectFit: "cover" }} />
              <div className="overlay">
                <i className="fa fa-plus"></i>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="row mt-4 mb-5 g-4 align-items-stretch">
        <div className="col-md-6">
          {data.images[5] && (
            <div className="image-card h-100">
              <img src={data.images[5]} alt="" className="img-fluid w-100 h-100" style={{ objectFit: "cover" }} />
              <div className="overlay">
                <i className="fa fa-plus"></i>
              </div>
            </div>
          )}
        </div>
        <div className="col-md-6">
          <div className="row g-4 h-100">
            {data.images.slice(6, 10).map((img, index) => (
              <div className="col-6" key={`small-2-${index}`}>
                <div className="image-card h-100">
                  <img src={img} alt="" className="img-fluid w-100 h-100" style={{ objectFit: "cover" }} />
                  <div className="overlay">
                    <i className="fa fa-plus"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Lookbook;