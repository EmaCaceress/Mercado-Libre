import React, { Component } from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import Icons from './CartWidget';

const NavBarComp = ({carrito}) =>{
    console.log(carrito);
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
                        <Icons carrito={carrito}/>
                    </Container>
                </Navbar>
            </div>
        )
}



export default NavBarComp;

