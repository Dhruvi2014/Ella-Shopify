import React, { useEffect, useState } from "react";
import axios from "axios";

import "../Style1.css";

import coatImg from "../assets/landing.png";
import model1 from "../assets/model1.png";
import model2 from "../assets/model2.png";
import landingpagehero from "../assets/landingpage.webp";
import landingpagehero2 from "../assets/landingpage1.png";
import landingpagehero3 from "../assets/landing1.png";
import landingpagehero4 from "../assets/landing2.png";
import landingpagehero5 from "../assets/landing3.png";
import landingpagehero6 from "../assets/landing4.webp";
import img1 from "../assets/tops.png";
import img2 from "../assets/pants.png";
import img3 from "../assets/casual.png";
import img4 from "../assets/coats.png";
import img5 from "../assets/hoodies.png";
import img6 from "../assets/slippers.png";
import img7 from "../assets/shoes.png";
import img8 from "../assets/accessories.png";
function LandingPage() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch("http://localhost:5000/api/landing-products")
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/men-items")
            .then(res => setItems(res.data))
            .catch(err => console.log(err));
    }, []);

    const categories = [
        { name: "TOPS", img: img1 },
        { name: "PANTS", img: img2 },
        { name: "CASUAL", img: img3 },
        { name: "COATS", img: img4 },
        { name: "HOODIES", img: img5 },
        { name: "SLIPPERS", img: img6 },
        { name: "SHOES", img: img7 },
        { name: "ACCESSORIES", img: img8 },
    ];

    return (

        <>
            <div className="container-fluid">
                <img src={landingpagehero}></img>

                <img src={landingpagehero2} className="mt-5"></img>

            </div>

            <div className="container-fluid landing-wrapper">

                <div className="row">

                    <div className="col-lg-6 hero-section">

                        <img src={coatImg} className="hero-img" />


                    </div>

                    <div className="col-lg-6 products-section">

                        <div className="row">

                            {products.map((item, index) => {

                                const image = index === 0 ? model1 : model2;

                                return (

                                    <div className="col-md-6 product-card" key={index}>

                                        <img src={image} className="product-img" />

                                        <p className="brand">
                                            {item.brand}
                                        </p>

                                        <p className="title">
                                            {item.name}
                                        </p>

                                        <p className="price">
                                            {item.price}
                                        </p>

                                        <div className="colors">

                                            <span className="dot"></span>
                                            <span className="dot"></span>
                                            <span className="dot"></span>

                                        </div>

                                    </div>

                                )

                            })}

                        </div>

                    </div>

                </div>

            </div>

            <div className="container-fluid landing-wrapper">

                <div className="row">

                    <div className="col-lg-6 products-section">

                        <div className="row">

                            {products.map((item, index) => {

                                const image = index === 0 ? model1 : model2;

                                return (

                                    <div className="col-md-6 product-card" key={index}>

                                        <img src={image} className="product-img" />

                                        <p className="brand">
                                            {item.brand}
                                        </p>

                                        <p className="title">
                                            {item.name}
                                        </p>

                                        <p className="price">
                                            {item.price}
                                        </p>

                                        <div className="colors">

                                            <span className="dot"></span>
                                            <span className="dot"></span>
                                            <span className="dot"></span>

                                        </div>

                                    </div>

                                )

                            })}

                        </div>

                    </div>

                    <div className="col-lg-6 hero-section">

                        <img src={landingpagehero3} className="hero-img" />


                    </div>

                </div>

            </div>

            <img src={landingpagehero4} className="w-100 mt-5" />


            <div className="container-fluid men-wrapper">
                <div className="row">
                    {items.map((item, index) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>

                            <div className="card-box">

                                {item.badge && (
                                    <span className={`badge-tag ${item.badge}`}>
                                        {item.badge.replace("_", " ")}
                                    </span>
                                )}

                                <img
                                    src={`/assets/${item.image}`}
                                    alt={item.title}
                                    className="card-img"
                                />

                                <div className="card-info">
                                    <h6 className="brand">{item.brand}</h6>
                                    <p className="title">{item.title}</p>

                                    <div className="price">
                                        {item.oldPrice && (
                                            <span className="old">Rs. {item.oldPrice}</span>
                                        )}
                                        <span className="new">Rs. {item.price}</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
            </div>

            <img src={landingpagehero5} className="w-100 mt-5" />

            <div className="container-fluid p-0">
                <div className="row g-0">
                    {categories.map((item, index) => (
                        <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                            <div className="category-card">
                                <img src={item.img} alt="" />
                                <div className="overlay">
                                    <span>{item.name}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <img src={landingpagehero6} className="w-100 mt-5" />

            <div className="container-fluid men-wrapper">
                <div className="row">
                    {items.map((item, index) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>

                            <div className="card-box">

                                {item.badge && (
                                    <span className={`badge-tag ${item.badge}`}>
                                        {item.badge.replace("_", " ")}
                                    </span>
                                )}

                                <img
                                    src={`/assets/${item.image}`}
                                    alt={item.title}
                                    className="card-img"
                                />

                                <div className="card-info">
                                    <h6 className="brand">{item.brand}</h6>
                                    <p className="title">{item.title}</p>

                                    <div className="price">
                                        {item.oldPrice && (
                                            <span className="old">Rs. {item.oldPrice}</span>
                                        )}
                                        <span className="new">Rs. {item.price}</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
            </div>

            <section className="about-section text-center">
                <div className="container">
                    <h2 className="about-title">ABOUT ELLA</h2>

                    <p className="about-description">
                        Pellentesque sit amet porta purus. Aliquam quis elementum velit. Donec ipsum mi,
                        auctor nec erat eu, consequat semper justo. Nulla eros velit, semper eu mollis id,
                        efficitur consectetur est. Vestibulum lacus ex, facilisis sit amet mauris sit amet,
                        tempus cursus felis. Curabitur nec luctus lorem, at vehicula enim.
                    </p>

                    <div className="row mt-5">
                        <div className="col-md-4 col-sm-12 about-box">
                            <i className="fa-regular fa-envelope about-icon"></i>
                            <h5>Email Us</h5>
                            <a href="#" className="about-link">Submit Form</a>
                        </div>

                        <div className="col-md-4 col-sm-12 about-box">
                            <i className="fa-solid fa-phone about-icon"></i>
                            <h5>Call Us</h5>
                            <a href="#" className="about-link">Learn More</a>
                        </div>

                        <div className="col-md-4 col-sm-12 about-box">
                            <i className="fa-regular fa-comments about-icon"></i>
                            <h5>Live Chat</h5>
                            <a href="#" className="about-link">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>


        </>

    )

}

export default LandingPage