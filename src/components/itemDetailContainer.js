import customFetch from "../utils/CustomFetch";
import { useEffect , useState } from "react";
import ItemDetail from "./ItemDetail";
import { stock } from "../utils/Stock";
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
  const [detail, setDetail]=useState({});
  const {id}=useParams();

  useEffect(()=>{
      customFetch(2000, stock)     
      .then(res=> setDetail(res.find(item=> item.id==parseInt(id))))
      .catch(rej=> console.log(rej)) 
  }, []);

  return(
    <>
      <ItemDetail key={detail.id} id={detail.id} title={detail.title} description={detail.description} cost={detail.cost} stock={detail.stock} picture={detail.picture}/>
    </>
  ) 
};

export default ItemDetailContainer;