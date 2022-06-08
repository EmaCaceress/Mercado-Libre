import ItemCount from './itemCount';

const Item = ({id, title, description, cost, stock, picture}) =>{
    
    const addCarrito = (qty) => alert("Tu seleccionaste "+ qty +"items");
    return(
            <div className="card" style={{width:"22vw", display:'inline-block', margin:"25px"}}>
                <img className="card-img-top" src={picture} style={{height:"35vh"}}alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{id}  {title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{cost}</p>
                    
                    <ItemCount stock={stock} initial={1} addCarrito={addCarrito}></ItemCount>
                </div>
            </div>
    );
}

export default Item;