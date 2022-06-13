import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = ({ stock, initial,  addCarrito }) => {

  const [contador, setContador] = useState(initial);

  const increment = () => {//1

    if (contador < stock) {

      setContador(contador+1);

    }

  };

  const decrement = () => {//2

    if (contador > initial) {

      setContador(contador - 1);

    }

  };

  const agregar = () => {//3
    addCarrito(contador);

  };

  return (

    <div className="flex gap-8 mt-4" style={{    
      border: "1px solid #282c34",
      borderRadius: "15px",
      padding: "3%"}}> 

      <div className="flex ml-4 text-xl font-semibold" style={{marginBottom:"2%"}}>

        <button className="w-8 h-8 rounded-md botones" onClick={increment}>

          +

        </button>

        <span className="w-8 h-8 flex justify-center items-center" style={{padding:"6% 20%",
        border:"2px solid black"}}>

          {contador}

        </span>

        <button className="w-8 h-8 rounded-md botones" onClick={decrement}>
          -
        </button>

      </div>

      <button className="w-44 h-8 text-white bg-black rounded-md shadow-2xl" onClick={agregar} style={{borderRadius:"5px"}}>
        agregar al carrito
      </button>
    </div>

  );

};

export default ItemCount;