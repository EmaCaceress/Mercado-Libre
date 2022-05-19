import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './components/NavBar';
import ItemCount from './components/ItemListContainer';
import { useState } from "react";



const App = () => {
  const [carrito, setCarrito]=useState(0);

  const addCarrito=(number)=>{
    return setCarrito(number)
  }

  return (
    <div className="App">
      <NavBarComp carrito={carrito}/>
      <ItemCount addCarrito={addCarrito} stock={10} initial={0}/>
    </div>
  );
}

export default App;

