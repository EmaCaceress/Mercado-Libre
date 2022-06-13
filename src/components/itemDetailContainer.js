import customFetch from "../utils/customFetch";
import { useEffect , useState } from "react";
import ItemDetail from "./itemDetail";
import ItemList from "./itemList";

const ItemDetailContainer = ({item}) => {
  const [detail, setDetail]=useState(item[0]);
  // useEffect(()=>{
  //     customFetch(1000, item)
  //     .then(res=> setDetail(res))
  //     .catch(rej=> console.log(rej)) 

  // }, []); }
  return(
    <>
      <ItemDetail key={detail.id} id={detail.id} title={detail.title} description={detail.description} cost={detail.cost} stock={detail.stock} picture={detail.picture}/>
    </>
  ) 
};

export default ItemDetailContainer;