import Item from "./item";


const ItemList = ({items,setId}) =>{

    return(
        <div>
            {
                items.length > 0
                ? items.map( item => <Item key={item.id} id={item.id} title={item.title} description={item.description} cost={item.cost} stock={item.stock} picture={item.picture} setId={setId}/>)
                : <h1>Cargando...</h1>
            }
        </div>
    );
}

export default ItemList;