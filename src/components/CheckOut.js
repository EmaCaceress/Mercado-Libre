import {Link} from 'react-router-dom';

const CheckOut = () =>{
    return(
        <>
             <Link to="/cart" style={{textDecoration:"none"}}><button style={{padding:"5%", background:"red", color:"white"}}>CheckOut</button></Link>
        </>
    );
}

export default CheckOut;