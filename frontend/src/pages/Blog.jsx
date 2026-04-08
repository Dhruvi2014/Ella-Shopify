import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Style1.css";
import blogHero from "../assets/blog-hero.webp";

const Blog = () => {

    const [blogs, setBlogs] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:5000/api/blog-articles")
            .then(res => setBlogs(res.data))
            .catch(err => console.log(err));

        axios.get("http://localhost:5000/api/featured-products")
            .then(res => setFeaturedProducts(res.data))
            .catch(err => console.log(err));

    }, []);

    return (
        <>

        <div className="container-fluid blog-page">

            <div className="row">

                <div className="col-lg-3 col-md-4 sidebar">

                    <div className="sidebar-section">

                        <h6 className="sidebar-title">
                            BLOG CATEGORIES
                            <i className="fa fa-chevron-down float-end"></i>
                        </h6>

                        <ul className="sidebar-list">

                            <li>Theme Demo</li>
                            <li>Collections</li>
                            <li>Product</li>
                            <li>Blog</li>
                            <li>Pages</li>
                            <li>New in</li>
                            <li>Trend</li>
                            <li>Shop</li>
                            <li>Buy Ella</li>

                        </ul>

                    </div>

                    <div className="sidebar-section mt-4">

                        <h6 className="sidebar-title">
                            RECENT ARTICLES
                            <i className="fa fa-chevron-down float-end"></i>
                        </h6>

                        {blogs.slice(0, 2).map((blog, index) => (

                            <div className="recent-article" key={index}>

                                <p className="mb-1">{blog.title}</p>

                                <small>{blog.date}</small>

                            </div>

                        ))}

                    </div>

                    <div className="sidebar-section mt-4">

                        <h6 className="sidebar-title">
                            FEATURED PRODUCT
                        </h6>

                        {featuredProducts.map((product, index) => (

                            <div className="featured-product" key={index}>

                                <img
                                    src={new URL(`../assets/${product.image}`, import.meta.url).href}
                                    alt="product"
                                />

                                <p className="product-brand">
                                    {product.brand}
                                </p>

                                <p className="product-name">
                                    {product.name}
                                </p>

                                <p className="price">
                                    From Rs. {product.price}.00 INR
                                </p>

                            </div>

                        ))}

                    </div>

                </div>


                <div className="col-lg-9 col-md-8 blog-content">

                    <div className="blog-header">

                        <span className="featured-badge">
                            Featured
                        </span>

                        <h2 className="blog-title">
                            Deumanto Sollicitudin Delo
                        </h2>

                        <p className="blog-meta">
                            On Aug 21, 2025 By <b>Halo Themes</b> / 0 comments
                        </p>

                    </div>

                    <div className="blog-image">

                        <img
                            src={blogHero}
                            alt="blog"
                            className="img-fluid"
                        />

                    </div>

                    <div className="blog-list">

                        {blogs.map((blog, index) => (

                            <div className="blog-card" key={index}>

                                <div className="blog-img">

                                    <img
                                        src={new URL(`../assets/${blog.image}`, import.meta.url).href}
                                        alt="blog"
                                    />

                                </div>

                                <div className="blog-info">

                                    <h4>
                                        {blog.title}
                                    </h4>

                                    <p className="blog-desc">
                                        {blog.description}
                                    </p>

                                    <a href="#" className="read-more">
                                        Read more
                                    </a>

                                    <p className="blog-meta">
                                        On {blog.date} By <b>{blog.author}</b> / 0 comments
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                    <h3>Dauemnto Delo Totem</h3>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque natus exercitationem 
                        fugit voluptas magni illum, nulla debitis iure officiis aliquam porro placeat quibusdam? 
                        Totam natus, incidunt praesentium quod nam commodi!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore maiores incidunt placeat ipsum non delectus quis laborum 
                        tempora saepe dolore hic vero cum asperiores adipisci soluta, perspiciatis at obcaecati doloremque?</p>

                </div>

            </div>

        </div>

        <section className="newsletter-section">
      <div className="container text-center">

        <h2 className="newsletter-title">
          Sign-up for EllaNews
        </h2>

        <p className="newsletter-text">
          Stay informed about the latest style advice and product launches. 
          Learn more about our emails and our 
          <span className="privacy"> Privacy Policy.</span>
        </p>

        <div className="newsletter-form d-flex justify-content-center">

          <div className="input-group newsletter-input">

            <span className="input-group-text">
              <i className="fa fa-envelope"></i>
            </span>

            <input
              type="email"
              className="form-control"
              placeholder="Email"
            />

            <button className="btn signup-btn">
              Sign up
            </button>

          </div>

        </div>

      </div>
    </section>

        </>

    );

};

export default Blog;