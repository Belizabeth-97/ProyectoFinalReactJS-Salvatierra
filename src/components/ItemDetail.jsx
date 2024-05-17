import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddItemButton from './AddItemButton';

function ItemDetail() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null); 

  useEffect(() => {
    fetch('/src/components/api.json')
      .then(response => response.json())
      .then(productos => {
        const productoEncontrado = productos.find(producto => producto.id === parseInt(id, 10));
        setProducto(productoEncontrado);
      })
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  if (!producto) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Detalle del Producto</h2>
      <p>{producto.nombre}</p>
      <img src={producto.imagen} alt={""} />
      <p>Ingredientes: {producto.descripcion}</p>
      <AddItemButton />
    </div>
  );
}

export default ItemDetail;

