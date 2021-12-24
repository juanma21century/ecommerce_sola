import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import NavLinks from './NavLinks';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';
import './styles.css'
import { isElementOfType } from 'react-dom/cjs/react-dom-test-utils.production.min';

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

                <NavDropdown title="Productos" id="collasible-nav-dropdown">
                    
                    <NavDropdown.Item href="#action/3.1">Electronica</NavDropdown.Item>
                </NavDropdown>
                <Nav>
                    {NavLinks.map((elemento, indice)=> {
                        return <Link key = {elemento.id} to = {elemento.href}>{elemento.name} </Link>
                    })}
                </Nav>
                <Nav>
                    <CartWidget/>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
        )
        
}

export default NavBar
