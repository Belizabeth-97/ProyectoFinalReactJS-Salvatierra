import CardProducts from "./CardProducts"
import React, { useState, useEffect } from 'react';
import ItemList from "./ItemList";

/* Container debe llevar un efecto y un estado */

function ItemListContainer() {
  const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('/src/components/api.json')
            .then(response => response.json())
            .then(data => setProductos(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
  
  return (
    <div>
      <ItemList productos ={productos}></ItemList>
    </div>
    )
}

export default ItemListContainer
