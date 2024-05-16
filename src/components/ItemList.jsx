import CardProducts from "./CardProducts"

function ItemList({productos}){
  return(
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {productos.map((producto) => (
        <CardProducts key={producto.id} nombre={producto.nombre} />
      ))}
    </section>
  )
}

export default ItemList