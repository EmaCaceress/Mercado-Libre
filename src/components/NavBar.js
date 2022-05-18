import React, { Component } from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';

export default class NavBarComp extends Component {
    render(){
        return(
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#">Logo</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/inicio.js">Inicio</Nav.Link>
                            <Nav.Link href="/productos.js">Productos</Nav.Link>
                            <Nav.Link href="/entregas.js">Entregas</Nav.Link>
                            <Nav.Link href="/contactanos.js">Contactanos</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

