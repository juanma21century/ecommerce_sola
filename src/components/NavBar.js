import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';
import './styles.css'

const NavBar = () => {



    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="light">
        <Container>
        <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#deets">Home</Nav.Link>
            </Nav>
            
            <Nav>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Electronica</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Celulares</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Notebooks</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#destacados">Destacados</Nav.Link>
            <Nav.Link eventKey={2} href="#ofertas">
                Ofertas
            </Nav.Link>
            <Nav>
                <CartWidget/>
            </Nav>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    )
}

export default NavBar
