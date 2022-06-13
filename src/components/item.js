import ItemDetail from './itemDetail';

const Item = ({id, title, description, cost, stock, picture,setId}) =>{
    
    const addCarrito = (qty) => alert("Tu seleccionaste "+ qty +"items");

    const details = e =>{
        setId(e.target.name);
    }

    return(
            <div className="card" style={{width:"22vw", display:'inline-block', margin:"25px"}}>
                <img className="card-img-top" src={picture} style={{height:"35vh"}}alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{id}  {title}</h5>
                    <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={details} name={id}>Ver mas</button>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Hay {stock} productos</small>
                </div>
            </div>
    );
}

export default Item;