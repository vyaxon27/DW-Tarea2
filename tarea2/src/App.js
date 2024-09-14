// src/App.js
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './App.css';

function App() {
  return (
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Mi Aplicación</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#features">Características</Nav.Link>
                <Nav.Link href="#pricing">Precios</Nav.Link>
              </Nav>
              <Button variant="outline-light">Iniciar Sesión</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="mt-5">
          <h1>Bienvenido a mi aplicación</h1>
          <p>Esta es una aplicación de ejemplo utilizando React y Bootstrap.</p>
          <Button variant="primary">Haz clic aquí</Button>
        </Container>
      </div>
  );
}

export default App;
