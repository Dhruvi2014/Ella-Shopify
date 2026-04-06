import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Style1.css";

const Faq = () => {

    const [faqs, setFaqs] = useState([]);
    const [active, setActive] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/api/faqs")
            .then(res => {
                setFaqs(res.data);
            });
    }, []);

    const toggle = (index) => {
        setActive(active === index ? null : index);
    };

    return (

        <div className="faq-page container">

            <div className="breadcrumb">
                Home / Help and FAQs
            </div>

            <h2 className="title">Help and FAQs</h2>

            <p className="subtitle">
                Below FAQ are some common concerns of our clients before purchasing the theme.
            </p>

            <div className="row">

                {/* LEFT SIDE */}

                <div className="col-md-4 help-box">

                    <h5>Need Help?</h5>

                    <p>
                        If you have an issue or question that requires immediate assistance, you can click the button below to chat live with a Customer Service representative.
                    </p>

                    <p>
                        If we aren’t available, drop us an email and we will get back to you within 20-36 hours!
                    </p>

                    <div className="contact-box">

                        <div className="contact-item">
                            <i className="fa-brands fa-facebook-messenger"></i>
                            <p>Message Us</p>
                        </div>

                        <div className="divider"></div>

                        <div className="contact-item">
                            <i className="fa-solid fa-envelope"></i>
                            <p>Contact Us</p>
                        </div>

                    </div>

                </div>

                {/* RIGHT SIDE */}

                <div className="col-md-8">

                    <h5 className="pre">Pre Sale Questions</h5>

                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item">

                            <div className="faq-question" onClick={() => toggle(index)}>

                                <span>Q: "{faq.question}"</span>

                                <i className={`fa-solid ${active === index ? "fa-minus" : "fa-plus"}`}></i>

                            </div>

                            {active === index && (
                                <div className="faq-answer">
                                    {faq.answer}
                                </div>
                            )}

                        </div>
                    ))}

                </div>

            </div>

            <div className="support-btn">
                <button>CONTACT SUPPORT</button>
            </div>

        </div>

    );
};

export default Faq;