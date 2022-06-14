import customFetch from "../utils/CustomFetch";
import { useEffect , useState } from "react";
import ItemDetail from "./ItemDetail";
import ItemList from "./ItemList";
import { stock } from "../utils/Stock";
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  const [items, setItems]=useState([]);
  const {id}=useParams();

  useEffect(()=>{
      setItems([]);
      customFetch(2000, stock)
      .then(res=>{
        if(id!==undefined)
          setItems(res.filter(item=>item.categoryId==id));
        else
          setItems(res);
      })
      .catch(rej=> console.log(rej)) 
  }, [id]); 

  return(
    <>
      <ItemList items={items}/>
    </>
  ) 
};

export default ItemListContainer;