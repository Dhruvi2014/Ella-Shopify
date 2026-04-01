import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import "../Style.css";
import heroImg from "../assets/herohome.png";
import heroImg1 from "../assets/heroImg1.png";

import img1 from "../assets/model1.png";
import img2 from "../assets/model2.png";
import img3 from "../assets/model3.png";

import model1 from "../assets/model1.png";
import model2 from "../assets/model2.png";

import modelImg from "../assets/lookbook1.webp";
import girlImg from "../assets/girlImg.png";

import img4 from "../assets/img4.webp";
import img5 from "../assets/img5.webp";
import img6 from "../assets/img6.webp";
import img7 from "../assets/img7.webp";
import img8 from "../assets/img8.webp";

import brand1 from "../assets/home1.png";
import brand2 from "../assets/home2.png";
import brand3 from "../assets/home3.png";
import brand4 from "../assets/home4.png";

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

            if (res.data.success) {
                navigate(res.data.redirectUrl);
            }

        } catch (error) {
            console.log(error);
        }
    };

    const prod = [
        { img: img4, title: "Terracotta Structured Pantsuit" },
        { img: img5, title: "Brown Knit Sweater" },
        { img: img6, title: "White Casual Denim Look" },
        { img: img7, title: "Maroon Winter Fit" },
        { img: img8, title: "Olive Green Outfit" },
        { img: img5, title: "Brown Knit Sweater" }
    ];

    return (
        <>
            <section className="hero">

                <div className="hero-content">
                    <h1>
                        TIMELESS STYLE FOR <br />
                        MODERN LIVES
                    </h1>

                    <button className="hero-btn btn btn-dark px-4 py-2" onClick={handleShopAll}>
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

                                    <button className="category-btn" onClick={handleShopAll}>
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

            <section className="hero-section">
                <img
                    src={heroImg1}
                    alt="Fashion Model"
                    className="hero-section-bg"
                />
                <div className="hero-overlay-content">
                    <h2>
                        MINIMALIST DESIGNS <br />
                        CRAFTED FOR HER
                    </h2>
                    <a href="/" className="discover-link">DISCOVER</a>
                </div>
            </section>

            <section className="light-section">
                <div className="container-fluid">
                    <div className="row align-items-center">

                        <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
                            <img
                                src={modelImg}
                                alt="Fashion"
                                className="img-fluid large-fashion-img"
                            />
                        </div>

                        <div className="col-lg-5 col-md-12">
                            <div className="circle-wrapper">

                                <div className="rotating-circle">
                                    <span>L</span>
                                    <span>I</span>
                                    <span>G</span>
                                    <span>H</span>
                                    <span>T</span>
                                    <span>&nbsp;</span>
                                    <span>L</span>
                                    <span>A</span>
                                    <span>Y</span>
                                    <span>E</span>
                                    <span>R</span>
                                    <span>S</span>
                                    <span>&nbsp;</span>
                                    <span>F</span>
                                    <span>O</span>
                                    <span>R</span>
                                    <span>&nbsp;</span>
                                    <span>S</span>
                                    <span>U</span>
                                    <span>M</span>
                                    <span>M</span>
                                    <span>E</span>
                                    <span>R</span>
                                </div>

                                <img
                                    src={modelImg}
                                    alt="Small Fashion"
                                    className="center-fashion-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="fashion-split-section container-fluid">
                <div className="row g-4">

                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="fashion-card">
                            <img
                                src={model2}
                                alt="Shop For Men"
                                className="img-fluid fashion-split-img"
                            />

                            <button className="shop-btn shop-btn-left" onClick={handleShopAll}>
                                SHOP FOR MEN
                            </button>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="fashion-card">
                            <img
                                src={model1}
                                alt="Shop For Women"
                                className="img-fluid fashion-split-img"
                            />

                            <button className="shop-btn shop-btn-right" onClick={handleShopAll}>
                                SHOP FOR WOMEN
                            </button>
                        </div>
                    </div>

                </div>
            </section>

            <div className="hero-container">

                <img src={girlImg} className="hero-image" alt="model" />

                <div className="hero-overlay">

                    <p className="hero-date">07/14/25</p>

                    <h1 className="hero-title">
                        THE ART OF EVERYDAY <br />
                        ELEGANCE
                    </h1>

                    <p className="hero-link">
                        READ THE FULL STORY
                    </p>

                </div>

            </div>

            <section className="new-arrivals-section">

                <div className="arrival-marquee">
                    <div className="marquee-track">
                        <span>● NEW ARRIVALS</span>
                        <span>● NEW ARRIVALS</span>
                        <span>● NEW ARRIVALS</span>
                        <span>● NEW ARRIVALS</span>
                        <span>● NEW ARRIVALS</span>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row g-0">

                        {prod.map((item, index) => (
                            <div key={index} className="col-lg-2 col-md-4 col-6">

                                <div className="product-card">

                                    <img src={item.img} alt="" className="product-img" />

                                    <div className="overlay">
                                        <button className="shop-btn">
                                            SHOP NOW
                                        </button>
                                    </div>

                                    <div className="product-title">
                                        {item.title}
                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>
                </div>

            </section>

            <section className="brand-section">

                <div className="brand-slider">

                    <div className="brand-track">

                        <div className="brand-item">
                            <img src={brand1} alt="" />
                        </div>

                        <div className="brand-item">
                            <img src={brand2} alt="" />
                        </div>

                        <div className="brand-item">
                            <img src={brand3} alt="" />
                        </div>

                        <div className="brand-item">
                            <img src={brand4} alt="" />
                        </div>


                        <div className="brand-item">
                            <img src={brand1} alt="" />
                        </div>

                        <div className="brand-item">
                            <img src={brand2} alt="" />
                        </div>

                        <div className="brand-item">
                            <img src={brand3} alt="" />
                        </div>

                        <div className="brand-item">
                            <img src={brand4} alt="" />
                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}

export default Home;