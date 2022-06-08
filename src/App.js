import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './components/NavBar';
import { useState } from "react";
import ItemListContainer from './components/ItemListContainer';



const App = () => {
  const [carrito, setCarrito]=useState(0);

  return (
    <div className="App">
      <NavBarComp carrito={carrito}/>
      <ItemListContainer></ItemListContainer>
    </div>
  );
}

export default App;

