import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CartWidget from './CartWidget';

const NavBar = () => {
    return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">GlowUp Agencia</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#link">Productos</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Branding</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Social Media Management
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Creación de contenido</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                    Publicidad en redes
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <CartWidget />
            </Navbar.Collapse>
        </Container>
        </Navbar>  
    )
}

export default NavBar