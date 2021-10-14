import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import price1 from '../../images/Price/1.png'
import price2 from '../../images/Price/2.png'
import price3 from '../../images/Price/3.png'

const Price = () => {
    return (
        <div className="bg-service">
            <Container className="py-5">
                <div className="text-center py-5">
                    <h5 className="color">PRICE</h5>
                    <h1 className="service-txt w-75 mx-auto">We Offer Best Price to Help You</h1>
                </div>
                <Row xs={1} md={2} lg={3} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={price1} />
                            <Card.Body className="text-center">
                                <Card.Text className="text-start px-4">
                                    <div className="d-flex mb-2 align-items-center">
                                        <FontAwesomeIcon icon={faCheck} className="me-3 fs-5 text-success" />
                                        <p className="text-secondary mb-0">Lorem ipsum dolor sit amet</p>
                                    </div>
                                    <div className="d-flex mb-2 align-items-center">
                                        <FontAwesomeIcon icon={faCheck} className="me-3 fs-5 text-success" />
                                        <p className="text-secondary mb-0">Sit amet consectetur</p>
                                    </div>
                                    <div className="d-flex mb-2 align-items-center">
                                        <FontAwesomeIcon icon={faCheck} className="me-3 fs-5 text-danger" />
                                        <p className="text-secondary mb-0">Commodi, ut cum nobis adipisci</p>
                                    </div>
                                    <div className="d-flex mb-2 align-items-center">
                                        <FontAwesomeIcon icon={faCheck} className="me-3 fs-5 text-danger" />
                                        <p className="text-secondary mb-0">Maiores consectetur odit</p>
                                    </div>
                                    <div className="d-flex mb-2 align-items-center">
                                        <FontAwesomeIcon icon={faCheck} className="me-3 fs-5 text-danger" />
                                        <p className="text-secondary mb-0">Nulla sint iusto nostrum iste</p>
                                    </div>
                                </Card.Text>
                                <Button variant="warning" className="fs-5 py-2 px-5 my-4">Select Plan</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={price2} />
                            <Card.Body className="text-center">
                                <Card.Text className="text-start px-4">
                                    <div className="d-flex mb-2 align-items-center">
                                        <FontAwesomeIcon icon={faCheck} className="me-3 fs-5 text-success" />
                                        <p className="text-secondary mb-0">Lorem ipsum dolor sit amet</p>
                                    </div>
                                    <div className="d-flex mb-2 align-items-center">
                                        <FontAwesomeIcon icon={faCheck} className="me-3 fs-5 text-success" />
                                        <p className="text-secondary mb-0">Sit amet consectetur</p>
                                    </div>
                                    <div className="d-flex mb-2 align-items-center">
                                        <FontAwesomeIcon icon={faCheck} className="me-3 fs-5 text-success" />
                                        <p className="text-secondary mb-0">Commodi, ut cum nobis adipisci</p>
                                    </div>
                                    <div className="d-flex mb-2 align-items-center">
                                        <FontAwesomeIcon icon={faCheck} className="me-3 fs-5 text-success" />
                                        <p className="text-secondary mb-0">Maiores consectetur odit</p>
                                    </div>
                                    <div className="d-flex mb-2 align-items-center">
                                        <FontAwesomeIcon icon={faCheck} className="me-3 fs-5 text-danger" />
                                        <p className="text-secondary mb-0">Nulla sint iusto nostrum iste</p>
                                    </div>
                                </Card.Text>
                                <Button variant="warning" className="fs-5 py-2 px-5 my-4">Select Plan</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={price3} />
                            <Card.Body className="text-center">
                                <Card.Text className="text-start px-4">
                                    <div className="d-flex mb-2 align-items-center">
                                        <FontAwesomeIcon icon={faCheck} className="me-3 fs-5 text-success" />
                                        <p className="text-secondary mb-0">Lorem ipsum dolor sit amet</p>
                                    </div>
                                    <div className="d-flex mb-2 align-items-center">
                                        <FontAwesomeIcon icon={faCheck} className="me-3 fs-5 text-success" />
                                        <p className="text-secondary mb-0">Sit amet consectetur</p>
                                    </div>
                                    <div className="d-flex mb-2 align-items-center">
                                        <FontAwesomeIcon icon={faCheck} className="me-3 fs-5 text-success" />
                                        <p className="text-secondary mb-0">Commodi, ut cum nobis adipisci</p>
                                    </div>
                                    <div className="d-flex mb-2 align-items-center">
                                        <FontAwesomeIcon icon={faCheck} className="me-3 fs-5 text-success" />
                                        <p className="text-secondary mb-0">Maiores consectetur odit</p>
                                    </div>
                                    <div className="d-flex mb-2 align-items-center">
                                        <FontAwesomeIcon icon={faCheck} className="me-3 fs-5 text-success" />
                                        <p className="text-secondary mb-0">Nulla sint iusto nostrum iste</p>
                                    </div>
                                </Card.Text>
                                <Button variant="warning" className="fs-5 py-2 px-5 my-4">Select Plan</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Price;