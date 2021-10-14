import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../images/logo.png'
import userAvatar from '../../images/avatar.png'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFingerprint, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    const showAlert = () => {
        !user.displayName && alert("Please Sign In to Proceed")
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" sticky="top" className="border-bottom shadow-sm">
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/home">
                            <img
                                src={logo}
                                width="140"
                                height="30"
                                className="d-inline-block align-top"
                                alt="logo"
                            />
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/price">Pricing</Nav.Link>
                            <NavDropdown title="More" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/services">Services</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/whyus">Why Us</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/team">Our Team </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/process">Working Process </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/review">Customer Review</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/blogs">Blogs</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>

                            {
                                user.displayName ?
                                    <div className="d-flex align-items-center justify-content-center">
                                        {user.photoURL ?
                                            <img src={user.photoURL} alt="" style={{ height: '35px', borderRadius: '50%' }} className="me-2" />
                                            :
                                            <img src={userAvatar} alt="" style={{ height: '35px', borderRadius: '50%' }} className="me-2" />}
                                        <span className="fw-bold text-dark">{user.displayName}</span>
                                        <Button className="btn btn-danger ms-2 btn-sm" onClick={logOut}>Logout</Button>
                                    </div>
                                    :
                                    <div className="d-flex justify-content-center">
                                        <NavLink to="/login">
                                            <Button className="btn btn-primary me-lg-3 mb-2 mb-lg-0"><FontAwesomeIcon icon={faFingerprint} className="me-2" />Login</Button>
                                        </NavLink>
                                        <NavLink to="/signup">
                                            <Button className="btn btn-primary"><FontAwesomeIcon icon={faSignInAlt} className="me-2" />Signup</Button>
                                        </NavLink>
                                    </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;