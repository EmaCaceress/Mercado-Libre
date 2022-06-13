import customFetch from "../utils/customFetch";
import { useEffect , useState } from "react";
import ItemDetail from "./itemDetail";
import ItemList from "./itemList";


const ItemListContainer = ({items, setItems, setId}) => {


  useEffect(()=>{
    // if(id!==undefined){
    //   customFetch(1000, items.filter(e=> e.id==parseInt(id)))
    //   .then(res=> setPage(res))
    //   .catch(rej=> console.log(rej)) 
    // }else{
      customFetch(2000, items)
      .then(res=> setItems(res))
      .catch(rej=> console.log(rej)) 

  }, []); 

  return(
    <>
      <ItemList items={items} setId={setId}/>
    </>
  ) 
};

export default ItemListContainer;