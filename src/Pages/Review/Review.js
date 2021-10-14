import { faQuoteRight, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Review.css'

const Review = () => {
    return (
        <div className="bg">
            <Container className="py-5">
                <div className="py-5 text-center text-md-start">
                    <h5 className="color">TESTIMONIAL</h5>
                    <h1 className="service-txt w-50 mx-auto mx-md-0 review-txt">What Says Our Happy Customer</h1>
                </div>
                <Row className="g-4">
                    <Col xs={12} md={6} className="">
                        <div className="p-4 bg-white rounded shadow">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    <img src="https://i.ibb.co/rfRWmLd/developer-1.jpg" alt="" style={{ height: "70px" }} className="rounded-circle me-4" />
                                    <div className="">
                                        <h3>John Doe</h3>
                                        <p className="text-secondary mb-0">Customer</p>
                                        <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                                        <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                                        <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                                        <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                                        <FontAwesomeIcon icon={faStarHalfAlt} className="me-2 text-warning" />
                                    </div>
                                </div>
                                <FontAwesomeIcon icon={faQuoteRight} className="me-2 right-quote" style={{ fontSize: "70px", color: "#EEEEEE" }} />
                            </div>
                            <p className="text-secondary mt-4 px-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore itaque earum sequi consequuntur aliquid. Quo ea pariatur ipsum dicta eveniet.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="">
                        <div className="p-4 bg-white rounded shadow">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    <img src="https://i.ibb.co/7kzyfTL/developer-2.jpg" alt="" style={{ height: "70px" }} className="rounded-circle me-4" />
                                    <div className="">
                                        <h3>Edward</h3>
                                        <p className="text-secondary mb-0">Customer</p>
                                        <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                                        <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                                        <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                                        <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                                        <FontAwesomeIcon icon={faStar} className="me-2 text-warning" />
                                    </div>
                                </div>
                                <FontAwesomeIcon icon={faQuoteRight} className="me-2 right-quote" style={{ fontSize: "70px", color: "#EEEEEE" }} />
                            </div>
                            <p className="text-secondary mt-4 px-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore itaque earum sequi consequuntur aliquid. Quo ea pariatur ipsum dicta eveniet.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Review;