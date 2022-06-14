import { useState } from 'react';
const { stock } = require('../utils/Stock');

const Search = ({items, setItems}) =>{

    const [busqueda, setBusqueda]= useState("");
    
    const handleChange = e =>{
        setBusqueda(e.target.value);
        searchResult(e.target.value);
    }

    const searchResult = (text) =>{
        let result = stock.filter((element)=>{
        if( element.title.toString().toLowerCase().includes(text.toLowerCase()) ) return element;
        });
        setItems(result);
    }

    return(
        <>
            <input id="text" value={busqueda} onChange={handleChange}/>
        </>
    );
}

export default Search;