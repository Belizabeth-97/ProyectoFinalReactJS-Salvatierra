import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddItemButton from './AddItemButton';

function ItemDetail() {
  const { id } = useParams();
  const [producto, setProducto] = useState({});

  useEffect(() => {
    fetch(`/src/components/api.json?id=${id}`)
      .then(response => response.json())
      .then(data => setProducto(data))
      .catch(error => console.error('Error fetching product details:', error));
  }, []);

  if (!producto) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Detalle del Producto {}</h2>
      <p>Nombre: {producto.nombre}</p>
      <p>Descripción: {producto.descripcion}</p>
      <AddItemButton></AddItemButton>
    </div>
  );
}

export default ItemDetail;