import React, { useState } from "react";
import axios from "axios";
import "../Style1.css";

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

        </>

    );
};

export default ContactUs;