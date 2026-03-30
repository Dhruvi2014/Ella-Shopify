import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import "../Style.css";
import heroImg from "../assets/herohome.png";

import img1 from "../assets/model1.png";
import img2 from "../assets/model2.png";
import img3 from "../assets/model3.png";

function Home() {
    const categories = [
        { img: img1, title: "SHOP COATS" },
        { img: img2, title: "SHOP HOODIES" },
        { img: img3, title: "SHOP KNITS" },
    ];

    const [products, setProducts] = useState([]);
    const [start, setStart] = useState(0);

    const visibleCount = 3;

    useEffect(() => {
        axios.get("http://localhost:5000/api/products")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    }, []);

    const nextSlide = () => {
        if (start + visibleCount < products.length) {
            setStart(start + 1);
        }
    };

    const prevSlide = () => {
        if (start > 0) {
            setStart(start - 1);
        }
    };

    const visibleProducts = products.slice(start, start + visibleCount);

    const navigate = useNavigate();

 const handleShopAll = async () => {

   try {

    const res = await axios.get("http://localhost:5000/api/shop/shop-all-products")

    if(res.data.success){
        navigate(res.data.redirectUrl);
    }

   } catch(error){
    console.log(error);
   }

 };

    return (
        <>
            <section className="hero">

                <div className="hero-content">
                    <h1>
                        TIMELESS STYLE FOR <br />
                        MODERN LIVES
                    </h1>

                     <button className="hero-btn btn btn-dark px-4 py-2" onClick={handleShopAll}>
        <i className="fa-solid fa-bag-shopping me-2"></i>
        SHOP ALL PRODUCTS
     </button>
                </div>

                <div className="hero-img">
                    <img src={heroImg} alt="fashion" />
                </div>

            </section>

            <section className="category-section ">
                <div className="container-fluid">
                    <div className="row g-0">

                        {categories.map((item, index) => (
                            <div className="col-lg-4 col-md-4 col-12" key={index}>
                                <div className="category-card">

                                    <img src={item.img} alt="category" />

                                    <div className="overlay"></div>

                                    <button className="category-btn">
                                        {item.title}
                                    </button>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            <div className="container-fluid mt-5">
                <h4 className="fw-bold mb-4">BEST SELLER</h4>

                <div className="slider-wrapper">

                    {start > 0 && (
                        <button className="nav-btn left" onClick={prevSlide}>
                            <i className="fas fa-arrow-left"></i>
                        </button>
                    )}

                    <div className="row">
                        {visibleProducts.map((p, i) => (
                            <div className="col-md-4 col-sm-12" key={i}>
                                <div className="product-card">
                                    <img src={p.image} alt={p.name} />
                                    <div className="product-info">
                                        <p>{p.name}</p>
                                        <span>₹ {p.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {start + visibleCount < products.length && (
                        <button className="nav-btn right" onClick={nextSlide}>
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    )}

                </div>
            </div>
        </>
    );
}

export default Home;