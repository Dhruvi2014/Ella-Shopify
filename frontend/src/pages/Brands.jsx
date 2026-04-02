import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Style1.css";
import brands1 from "../assets/brands-1.webp";
import brands2 from "../assets/brands-2.webp";
import brands3 from "../assets/brands-3.webp";
import brands4 from "../assets/brands-4.webp";
import brands5 from "../assets/brands-5.webp";
const alphabets = ["ALL", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const [active, setActive] = useState("ALL");

  useEffect(() => {
    fetchBrands("ALL");
  }, []);

  const fetchBrands = async (letter) => {
    setActive(letter);
    const res = await axios.get(
      `http://localhost:5000/api/brands/${letter}`
    );
    setBrands(res.data);
  };

  const grouped = brands.reduce((acc, brand) => {
    const letter = brand.firstLetter;
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(brand);
    return acc;
  }, {});

  return (
    <div className="brands-page container py-5">

      <h2 className="mb-4">BRANDS</h2>

      <div className="brand-logos d-flex justify-content-between mb-4">
        <img src={brands1} alt="" />
        <img src={brands2} alt="" />
        <img src={brands3} alt="" />
        <img src={brands4} alt="" />
        <img src={brands5} alt="" />
      </div>

      <div className="alphabet-grid mb-5">
        {alphabets.map((l, i) => (
          <button
            key={i}
            className={active === l ? "active" : ""}
            onClick={() => fetchBrands(l)}
          >
            {l}
          </button>
        ))}
      </div>

      {Object.keys(grouped).map((letter) => (
        <div key={letter} className="brand-section">
          <h3 className="letter">{letter}</h3>

          <div className="row">
            {grouped[letter].map((b, i) => (
              <div className="col-md-3 col-6 mb-2" key={i}>
                {b.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Brands;