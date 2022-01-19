import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';
import './styles.css'
import { useContexto } from './CartContext';


const NavBar = () => {

    const { cantidadTotal } = useContexto()

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="danger" variant="light">
                <Container>
                    <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        </Nav>

                        <NavDropdown title="Productos" id="collasible-nav-dropdown">
                            
                            <NavDropdown.Item href="#action/3.1">Electronica</NavDropdown.Item>
                        </NavDropdown>
                        <Nav className='text-center'>
                            <CartWidget/>
                            {cantidadTotal}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
        )
        
}

export default NavBar
