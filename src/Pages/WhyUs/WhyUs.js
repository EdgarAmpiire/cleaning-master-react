import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import whyUs from '../../images/WhyUs/why.png'
import why1 from '../../images/WhyUs/1.png'
import why2 from '../../images/WhyUs/2.png'
import why3 from '../../images/WhyUs/3.png'
import why4 from '../../images/WhyUs/4.png'

const WhyUs = () => {
    return (
        <div className="bg">
            <Container className="py-5">
                <Row className="align-items-center">
                    <Col xs={12} md={7}>
                        <div className="py-5 text-center text-md-start">
                            <h5 className="color">WHAT CHOOSE US</h5>
                            <h1 className="service-txt w-75 mx-auto mx-md-0">Why Choose Our Service Provider</h1>
                        </div>
                        <Row className="g-4">
                            <Col xs={6}>
                                <img src={why1} alt="" />
                                <h3 className="fw-bold my-2">Satisfaction Guaranteed</h3>
                                <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quisquam.</p>
                            </Col>
                            <Col xs={6}>
                                <img src={why2} alt="" />
                                <h3 className="fw-bold my-2">Screened & Trained Team</h3>
                                <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quisquam.</p>
                            </Col>
                            <Col xs={6}>
                                <img src={why3} alt="" />
                                <h3 className="fw-bold my-2">Flexible Arrival Time</h3>
                                <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quisquam.</p>
                            </Col>
                            <Col xs={6}>
                                <img src={why4} alt="" />
                                <h3 className="fw-bold my-2">Competetive Pricing</h3>
                                <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quisquam.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={5}>
                        <img src={whyUs} alt="" className="img-fluid" />
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default WhyUs;