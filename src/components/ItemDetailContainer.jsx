import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {

    const { id } = useParams();
    const [producto, setProducto] = useState({}); 

  useEffect(() => {
    fetch('/src/components/api.json')
      .then(response => response.json())
      .then(productos => {
        const productoEncontrado = productos.find(producto => producto.id == id)
        setProducto(productoEncontrado);
      })
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  return (
    <div>
      <ItemDetail {...producto}/>
    </div>
  );
}

export default ItemDetailContainer;




  