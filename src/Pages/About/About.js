import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import aboutImg from '../../images/about.png'
import './About.css'

const About = () => {
    return (
        <div className="bg">
            <Container className="py-5 text-center">
                <Row className="align-items-center">
                    <Col xs={12} md={5} lg={6} className="about-box">
                        <img src={aboutImg} alt="" className="img-fluid" />
                    </Col>
                    <Col xs={12} md={7} lg={6} className="p-3 p-lg-0 mt-5">
                        <div className="text-center text-md-start ">
                            <h5 className="color">ABOUT US</h5>
                            <h1 className="">Best Cleaning Services Provider Since 2001</h1>
                            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet provident ratione repudiandae quis, eum, doloribus commodi sed, natus quam dignissimos culpa quasi</p>
                        </div>
                        <div className="mt-4 text-start">
                            <div className="d-flex mb-2">
                                <FontAwesomeIcon icon={faCheckSquare} className="me-2 color fs-3" />
                                <h5>Loaded With Professional and Honest Cleaners</h5>
                            </div>
                            <div className="d-flex mb-2">
                                <FontAwesomeIcon icon={faCheckSquare} className="me-2 color fs-3" />
                                <h5>Provide the Finest Cleaning Supplies</h5>
                            </div>
                            <div className="d-flex mb-2">
                                <FontAwesomeIcon icon={faCheckSquare} className="me-2 color fs-3" />
                                <h5>100% Satisfaction Cleaning Service</h5>
                            </div>
                            <div className="d-flex mb-2">
                                <FontAwesomeIcon icon={faCheckSquare} className="me-2 color fs-3" />
                                <h5>We are bonded and Insured</h5>
                            </div>
                        </div>
                        <Button variant="warning" className="fs-5 py-2 px-5 mt-4">More About Us</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;