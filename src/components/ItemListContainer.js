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
    alert(`se agregaron ${contador} productos al carrito`);

  };

  return (

    <div className="flex gap-8 mt-4"> 

      <div className="flex ml-4 text-xl font-semibold">

        <button className="w-8 h-8 rounded-md" onClick={increment}>

          +

        </button>

        <span className="w-8 h-8 flex justify-center items-center">

          {contador}

        </span>

        <button className="w-8 h-8 rounded-md" onClick={decrement}>
          -
        </button>

      </div>

      <button className="w-44 h-8 text-white bg-black rounded-md shadow-2xl" onClick={agregar}>
        agregar al carrito
      </button>
    </div>

  );

};

export default ItemCount;