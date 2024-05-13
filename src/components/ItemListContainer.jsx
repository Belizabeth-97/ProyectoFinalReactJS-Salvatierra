import CardProducts from "./CardProducts"
import React, { useState, useEffect } from 'react';

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
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {productos.map((producto) => (
        <CardProducts key={producto.id} nombre={producto.nombre} />
      ))}
    </section>
  );
}

export default ItemListContainer
