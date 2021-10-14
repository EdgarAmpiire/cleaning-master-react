import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Services.css'
import service1 from '../../images/Services/1.png'
import service2 from '../../images/Services/2.png'
import service3 from '../../images/Services/3.png'
import service4 from '../../images/Services/4.png'
import service5 from '../../images/Services/5.png'
import service6 from '../../images/Services/6.png'

const Services = () => {
    return (
        <div className="bg-service">
            <Container className="py-5">
                <div className="text-center py-5">
                    <h5 className="color">WHAT WE DO</h5>
                    <h1 className="service-txt w-75 mx-auto">We Offer Different Services to Clean Your Area</h1>
                </div>
                <Row className="text-center g-4">
                    <Col xs={12} md={6} lg={4}>
                        <div className="bg-white p-4 rounded shadow h-100">
                            <img src={service1} alt="" />
                            <h3 className="fw-bold my-2">House Cleaning</h3>
                            <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quisquam.</p>
                        </div>
                    </Col>

                    <Col xs={12} md={6} lg={4}>
                        <div className="bg-white p-4 rounded shadow h-100">
                            <img src={service2} alt="" />
                            <h3 className="fw-bold my-2">Office Cleaning</h3>
                            <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quisquam.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <div className="bg-white p-4 rounded shadow h-100">
                            <img src={service3} alt="" />
                            <h3 className="fw-bold my-2">Furniture Cleaning</h3>
                            <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quisquam.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <div className="bg-white p-4 rounded shadow h-100">
                            <img src={service4} alt="" />
                            <h3 className="fw-bold my-2">Construction Cleaning</h3>
                            <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quisquam.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <div className="bg-white p-4 rounded shadow h-100">
                            <img src={service5} alt="" />
                            <h3 className="fw-bold my-2">Carpet Cleaning</h3>
                            <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quisquam.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <div className="bg-white p-4 rounded shadow h-100">
                            <img src={service6} alt="" />
                            <h3 className="fw-bold my-2">Glass Cleaning</h3>
                            <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, quisquam.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Services;