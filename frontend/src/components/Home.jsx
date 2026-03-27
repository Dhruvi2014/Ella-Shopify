import React from "react";
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
    return (
        <>
            <section className="hero">

                <div className="hero-content">
                    <h1>
                        TIMELESS STYLE FOR <br />
                        MODERN LIVES
                    </h1>

                    <button className="hero-btn">
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

        </>
    );
}

export default Home;