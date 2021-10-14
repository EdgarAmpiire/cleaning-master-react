import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './Team.css'

import team1 from '../../images/Team/1.jpg'
import team2 from '../../images/Team/2.jpg'
import team3 from '../../images/Team/3.jpg'

const Team = () => {
    return (
        <div className="team-bg">
            <Container className="py-5 text-center">
                <div className="text-center pb-5">
                    <h5 className="text-warning pt-5">OUR TEAM</h5>
                    <h1 className="service-txt text-white">Our Expert Team</h1>
                </div>
                <Row className="g-4">
                    <Col xs={12} md={6} lg={4}>
                        <img src={team1} alt="" className="img-fluid rounded shadow" />
                        <h3 className="bg-white py-1 w-75 mx-auto rounded mt-1">Adam Leon</h3>
                        <p className="text-secondary fs-5">Carpet Cleaning</p>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <img src={team2} alt="" className="img-fluid rounded shadow" />
                        <h3 className="bg-white py-1 w-75 mx-auto rounded mt-1">Shafani Mona</h3>
                        <p className="text-secondary fs-5">House Cleaning</p>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <img src={team3} alt="" className="img-fluid rounded shadow" />
                        <h3 className="bg-white py-1 w-75 mx-auto rounded mt-1">Han Lucky</h3>
                        <p className="text-secondary fs-5">Furniture Cleaning</p>
                    </Col>
                </Row>
                <Button variant="warning" className="fs-5 py-2 px-5 mt-5">More Team</Button>
            </Container>
        </div>
    );
};

export default Team;