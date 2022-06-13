import React, { Component } from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import Icons from './CartWidget';
import Search from './search';

const NavBarComp = ({carrito, items, setItems}) =>{

        return(
            <div>
                <Navbar className='nav-header'>
                    <Container>
                        <Navbar.Brand href="#">
                        <a class="nav-logo" href="//www.mercadolibre.com.ar" tabindex="2">Mercado Libre Argentina - Donde comprar y vender de todo</a>
                        </Navbar.Brand>
                        <Search items={items} setItems={setItems}/>
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

