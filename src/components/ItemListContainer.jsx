import React, { useState, useEffect } from 'react';
import ItemList from "./ItemList";
import { getProducts } from '../function';

function ItemListContainer() {
  const [productos, setProductos] = useState([]);

    useEffect(() => {
      
      getProducts()
      .then((resultado)=>{
        setProductos(resultado)
      })
    }, []);
  
  return (
    <div>
      <ItemList productos ={productos}></ItemList>
    </div>
    )
}

export default ItemListContainer
