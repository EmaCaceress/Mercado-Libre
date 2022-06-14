import ItemDetail from './ItemDetail';
import {Link} from 'react-router-dom';

const Item = ({id, title, description, cost, stock, picture}) =>{
    return(
            <div className="card" style={{width:"22vw", display:'inline-block', margin:"25px"}}>
                <img className="card-img-top" src={picture} style={{height:"35vh"}}alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <Link to={`/item/${id}`} ><button type="button" className="btn btn-secondary btn-lg btn-block">Ver mas</button></Link>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Hay {stock} productos</small>
                </div>
            </div>
    );
}

export default Item;