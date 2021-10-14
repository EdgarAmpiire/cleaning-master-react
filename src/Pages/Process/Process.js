import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

import process1 from '../../images/Process/1.jpg'
import process2 from '../../images/Process/2.jpg'
import process3 from '../../images/Process/3.jpg'
import './Process.css'

const Process = () => {
    return (
        <div className="bg">
            <Container className="py-5 text-center">
                <div className="py-5 text-center text-md-start">
                    <h5 className="color">HOW WE WORK</h5>
                    <h1 className="service-txt w-75 mx-auto mx-md-0">Cleaning Master Working Process</h1>
                </div>
                <Row className="g-4">
                    <Col xs={12} md={6} lg={4}>
                        <img src={process1} alt="" className="img-fluid rounded shadow-sm mb-4" style={{ height: "220px" }} />
                        <h1 className="number bg-warning">1</h1>
                        <h3 className="mt-4">Choose a Cleaning Plan</h3>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam modi ab asperiores ullam ipsum consequatur.</p>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <img src={process2} alt="" className="img-fluid rounded shadow-sm mb-4" style={{ height: "220px" }} />
                        <h1 className="number bg-warning">2</h1>
                        <h3 className="mt-4">We Clean</h3>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam modi ab asperiores ullam ipsum consequatur.</p>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <img src={process3} alt="" className="img-fluid rounded shadow-sm mb-4" style={{ height: "220px" }} />
                        <h1 className="number bg-warning">3</h1>
                        <h3 className="mt-4">Back to Comfortable</h3>
                        <p className="text-secondary text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam modi ab asperiores ullam ipsum consequatur.</p>
                    </Col>

                </Row>
                <Button variant="warning" className="fs-5 py-2 px-5 my-5">More Team</Button>
            </Container>
        </div>
    );
};

export default Process;