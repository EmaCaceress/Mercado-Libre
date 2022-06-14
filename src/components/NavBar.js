import React, { Component } from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap';
import Icons from './CartWidget';
import Search from './Search';
import {Link} from 'react-router-dom';

const NavBarComp = ({carrito, items, setItems}) =>{

        return(
            <div>
                <Navbar className='nav-header'>
                    <Container>
                        <Navbar.Brand href="#">
                        <Link to="/" class="nav-logo" tabindex="2">Mercado Libre Argentina - Donde comprar y vender de todo</Link>
                        </Navbar.Brand>
                        <Search items={items} setItems={setItems}/>
                        <Nav className="me-auto"> 
                            <Nav.Link ><Link className="category"to="/category/1">Indumentaria</Link></Nav.Link>
                            <Nav.Link ><Link className="category"to="/category/2">Electrodomesticos</Link></Nav.Link>
                            <Nav.Link ><Link className="category"to="/category/3">Vehiculos</Link></Nav.Link>
                        </Nav>
                        <Icons carrito={carrito}/>
                    </Container>
                </Navbar>
            </div>
        )
}



export default NavBarComp;

