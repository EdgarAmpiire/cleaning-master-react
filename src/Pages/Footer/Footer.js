import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

// this is the footer page
const Footer = () => {
    return (
        <div className="footer pt-5">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 text-start px-3 text-dark d-none d-md-flex">
                    <div className="col mb-3 mb-md-0">
                        <h5>CONTACT INFO</h5>
                        <p className="w-75">A powerhouse of cutting-edge education, research & teaching in The World</p>
                        <div className="d-flex align-items-center mb-2 f-body">
                            <FontAwesomeIcon icon={faHome} className="f-icon" />
                            <p className="ms-3 mb-0 f-text">Wari, Dhaka-1203, Bangladesh</p>
                        </div>
                        <div className="d-flex align-items-center mb-2 f-body">
                            <FontAwesomeIcon icon={faPhoneAlt} className="f-icon" />
                            <p className="ms-3 mb-0 f-text">+88 017 123429847</p>
                        </div>
                        <div className="d-flex align-items-center mb-2 f-body">
                            <FontAwesomeIcon icon={faEnvelope} className="f-icon" />
                            <p className="ms-3 mb-0 f-text">devshovon@example.com</p>
                        </div>
                    </div>
                    <div className="col mb-3 mb-md-0">
                        <h5>OUR Services</h5>
                        <p className="mb-2 f-courses">House Cleaning</p>
                        <p className="mb-2 f-courses">Office Cleaning</p>
                        <p className="mb-2 f-courses">Furniture Cleaning</p>
                        <p className="mb-2 f-courses">Construction Cleaning</p>
                        <p className="mb-2 f-courses">Carpet Cleaning</p>
                        <p className="mb-2 f-courses">Glass Cleaning</p>
                    </div>
                    <div className="col">
                        <h5>Quick Links</h5>
                        <Link to="/home" className="text-decoration-none text-dark q-link d-block">
                            Home
                        </Link>
                        <Link to="/about" className="text-decoration-none text-dark q-link d-block">
                            About
                        </Link>
                        <Link to="/services" className="text-decoration-none text-dark q-link d-block">
                            Services
                        </Link>
                        <Link to="/price" className="text-decoration-none text-dark q-link d-block">
                            Pricing
                        </Link>
                        <Link to="/team" className="text-decoration-none text-dark q-link d-block">
                            Our Team
                        </Link>
                        <Link to="/process" className="text-decoration-none text-dark q-link d-block">
                            Working Process
                        </Link>
                        <Link to="/whyus" className="text-decoration-none text-dark q-link d-block">
                            Why Us
                        </Link>
                    </div>
                    <div className="col mt-3 mt-md-0">
                        <h5>News Letter</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta esse consequatur necessitatibus debitis.</p>
                        <div className="d-flex align-items-center">
                            <input type="text" className="form-control py-3 pe-5" placeholder="Enter Your Email" />
                            <div className="news-letter bg-warning rounded p-1">
                                <FontAwesomeIcon icon={faPaperPlane} className="mx-2 " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-top border-2 bg-gradiant">
                <div className="d-md-flex justify-content-between align-items-center container">
                    <p className="p-3 mb-0 text-dark ">© 2021 devShovon13. All rights reserved.</p>
                    <div className="d-flex justify-content-center pb-3 pb-md-0">
                        <FontAwesomeIcon icon={faTwitter} className="fa-social-icon icon-1 fs-3 me-3" />
                        <FontAwesomeIcon icon={faFacebook} className="fa-social-icon icon-2 fs-3 me-3" />
                        <FontAwesomeIcon icon={faInstagram} className="fa-social-icon icon-3 fs-3 me-3" />
                        <FontAwesomeIcon icon={faLinkedin} className="fa-social-icon icon-4 fs-3 me-3" />
                        <FontAwesomeIcon icon={faYoutube} className="fa-social-icon icon-5 fs-3" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;