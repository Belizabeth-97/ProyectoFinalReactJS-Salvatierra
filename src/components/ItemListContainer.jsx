import CardProducts from "./CardProducts"

/* Container debe llevar un efecto y un estado */

function ItemListContainer() {
  // Lista de productos
  const productos = [
    { nombre: 'Simple Pepinillo', id: 1 },
    { nombre: 'Simple Cheddar', id: 2 },
    { nombre: 'Simple Bacon', id: 3 },
    { nombre: 'Doble Pepinillo', id: 4 },
    { nombre: 'Doble Cheddar', id: 5 },
    { nombre: 'Doble Bacon', id: 6 },
    { nombre: 'Triple Pepinillo', id: 7 },
    { nombre: 'Triple Cheddar', id: 8 },
    { nombre: 'Triple Bacon', id: 9 },
    { nombre: 'Papas fritas', id: 10 },
    { nombre: 'Papas con Cheddar', id: 11 },
    { nombre: 'Papas con Cheddar y Bacon', id: 12 },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {productos.map((producto) => (
        <CardProducts key={producto.id} nombre={producto.nombre} />
      ))}
    </section>
  );
}

export default ItemListContainer
