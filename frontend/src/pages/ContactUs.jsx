import React, { useState } from "react";
import axios from "axios";
import "../Style1.css";
import bg from "../assets/bg.jpg";
const ContactUs = () => {

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        comment: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        const token = userInfo?.token;

        if (!token) {
            alert("First login then submit the form");
            return;
        }

        try {

            await axios.post(
                "http://localhost:5000/api/contactus",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert("Message sent successfully");

        } catch (error) {
            console.log(error.response?.data);
            alert("Unauthorized. Please login again.");
        }
    };

    return (
        <>
            <section
                className="contact-hero"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="hero-overlay"></div>

                <div className="hero-inner">

                    <span>Home</span>
                    <span className="divider">›</span>
                    <span>Contact Us</span>

                    <h1>CONTACT US</h1>

                    <p>
                        We create timeless fashion and interiors that blend elegance,
                        comfort and individuality — inspiring a lifestyle that feels truly yours.
                    </p>

                </div>
            </section>


            <div className="contact-container">

                <h2 className="text-center">GET IN TOUCH</h2>

                <div className="contact-grid">

                    <div className="contact-form">

                        <h4>Send Us An Email</h4>
                        <p>Ask us anything! We're here to help.</p>

                        <form onSubmit={handleSubmit}>

                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Please fill in this field"
                                value={formData.name}
                                onChange={handleChange}
                            />

                            <label>Phone</label>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Please fill in this field"
                                value={formData.phone}
                                onChange={handleChange}
                            />

                            <label>Email address *</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            <label>Email</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Please fill in this field"
                                value={formData.subject}
                                onChange={handleChange}
                            />

                            <label>Comment</label>
                            <textarea
                                name="comment"
                                placeholder="Please fill in this field"
                                value={formData.comment}
                                onChange={handleChange}
                                rows="5"
                            />

                            <button type="submit" className="submit-btn">
                                SUBMIT CONTACT
                            </button>

                        </form>

                    </div>

                    <div className="contact-info">

                        <h4>Live Help</h4>

                        <p>
                            If you have an issue or question that requires immediate assistance,
                            you can click the button below to chat live with a Customer Service representative.
                        </p>

                        <button className="message-btn">MESSAGE US</button>

                        <p><i class="fa-solid fa-comment-dots"></i> TEXT: 091-123-ELLA</p>
                        <p><i class="fa-solid fa-envelope"></i> email@domain.com</p>

                        <p>
                            685 Market Street<br />
                            San Francisco, CA 94105<br />
                            United States
                        </p>

                        <p>
                            Opening Hours:<br />
                            MON to SAT: 9:00AM - 10:00PM<br />
                            SUN: 10:00AM - 6:00PM
                        </p>

                    </div>

                </div>

            </div>

            <div className="near-you-section">

                <div className="container text-center py-5">
                    <h2 className="near-title">Near you</h2>
                    <p className="near-desc">
                        We have 06 stores throughout “Country” and more in works.
                        Complete the search details below to find a Ella store near you.
                    </p>

                    <button className="btn find-btn">FIND A STORE</button>
                </div>

                <div className="map-container">

                    <iframe
                        title="map"
                        src="https://www.google.com/maps?q=10.8015,106.7106&z=15&output=embed"
                        loading="lazy"
                    ></iframe>

                    <div className="map-card shadow">
                        <h6>758, 35 Vietnam</h6>
                        <p>
                            758, 35 Vietnam,<br />
                            Phuong 25, Than,<br />
                            Min ho
                        </p>

                        <div className="map-icons">
                            <a
                                href="https://www.google.com/maps?q=10.8015,106.7106"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-solid fa-location-dot"></i>
                            </a>

                            <a
                                href="https://www.google.com/maps/dir/?api=1&destination=10.8015,106.7106"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-solid fa-diamond-turn-right"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

        </>

    );
};

export default ContactUs;