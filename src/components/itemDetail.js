import CheckOut from './CheckOut';
import ItemCount from './ItemCount';
import { useState } from "react";

const ItemDetail = ({id, title, description, cost, stock, picture}) =>{
    
    const [count, setCount]= useState(0);

    const onAdd = (qsy) =>{
        alert("Se agregaron "+ qsy +" a tu carrito");
        setCount(qsy);
    }

    return(
        <div className="containerDetail">
            <div className='containerImg'>
                <img className="imgDetail" src={picture} alt="Card image cap"/>
            </div>
            <div className="containerBody">
                <h5 className="card-title titleBody">{title}</h5>
                <p className="card-text textBody">{description}</p>
                <p className="card-text costBody">${cost}</p>
                {
                    count === 0
                    ? <ItemCount stock={stock} initial={0} addCarrito={onAdd}/>
                    : <CheckOut />
                }

            </div>
            <div className="card-footer containerFooter">
                <h1 className='titleFooter'>Hay {stock} productos</h1>
            </div>
        </div>
    );
}

export default ItemDetail;