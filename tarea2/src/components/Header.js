import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/" className="fw-bold">
                    <img
                        src="/images/Umg.png"
                        alt="Logo"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Mariano Galvez
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" className="nav-link active">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/programacion1" className="nav-link">Programación 1</Nav.Link>
                        <Nav.Link as={Link} to="/programacion2" className="nav-link">Programación 2</Nav.Link>
                        <Nav.Link as={Link} to="/programacion3" className="nav-link">Programación 3</Nav.Link>
                        <Nav.Link as={Link} to="/basesdedatos1" className="nav-link">Bases de Datos 1</Nav.Link>
                        <Nav.Link as={Link} to="/basesdedatos2" className="nav-link">Bases de Datos 2</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
