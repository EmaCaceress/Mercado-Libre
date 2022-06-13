import ItemCount from './itemCount';

const ItemDetail = ({id, title, description, cost, stock, picture}) =>{
    const onAdd = (qsy) =>{
        alert("Se agregaron "+ qsy +" a tu carrito");
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
                <ItemCount stock={stock} initial={0} addCarrito={onAdd}></ItemCount>
            </div>
            <div className="card-footer containerFooter">
                <h1 className='titleFooter'>Hay {stock} productos</h1>
            </div>
        </div>
    );
}

export default ItemDetail;