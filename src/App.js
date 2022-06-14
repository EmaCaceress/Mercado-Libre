import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './components/NavBar';
import { useState } from "react";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  const [carrito, setCarrito]=useState(0);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarComp carrito={carrito}/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:id" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        </Routes>
      {/* <NavBarComp carrito={carrito}/> 
      <ItemListContainer/>
      <ItemDetailContainer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

