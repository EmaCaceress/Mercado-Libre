import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './components/NavBar';
import { useState } from "react";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer';

const App = () => {
  const [carrito, setCarrito]=useState(0);
  const [items, setItems]=useState([]);
  const [id, setId]=useState();

  console.log(id);
  return (
    <div className="App">
      <NavBarComp carrito={carrito} setItems={setItems} items={items} /> 
      {
        id===undefined
          ? <ItemListContainer items={items} setItems={setItems} setId={setId}/>
          : <ItemDetailContainer item={items.filter(e=> e.id==parseInt(id))}/>
      }  
    </div>
  );
}

export default App;

