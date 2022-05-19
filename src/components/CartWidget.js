import {FaShoppingCart} from "react-icons/fa";
import React, {Component} from 'react';
import { Badge, Button } from "react-bootstrap";


class Icons extends Component{
    render(){
        return(
            <Button variant="dark"><FaShoppingCart style={{color:'white',fontSize:'2vw'}}/> <Badge bg="secondary">9</Badge></Button>
            // <FaShoppingCart style={{color:'white',fontSize:'2vw'}}/>
        );
    }

}

export default Icons;