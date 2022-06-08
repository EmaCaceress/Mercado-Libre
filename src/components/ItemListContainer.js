import customFetch from "../utils/customFetch";
import ItemList from "./itemList";
import { useEffect , useState } from "react";
const { stock } = require('../utils/stock');

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);

  useEffect(()=>{
    customFetch(2000, stock)
    .then(res=> setDatos(res))
    .catch(rej=> console.log(rej)) 
  }, []);
  
  return(
    <>
      <ItemList items={datos}></ItemList>
    </>
  ) 
};

export default ItemListContainer;