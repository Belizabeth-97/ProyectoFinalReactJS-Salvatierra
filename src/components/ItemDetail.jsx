
import AddItemButton from './AddItemButton';

function ItemDetail(producto) {
  return (
    <div>
      <h2 className='text-center from-stone-600 font-light '>Detalle del Producto</h2>
      <p className=' p-2 from-stone-600 font-medium '>{producto.nombre}</p>
      <img className= "w-80 h-80"src={producto.imagen} alt={""} />
      <p className=' p-1 font-light'>Ingredientes: {producto.descripcion}</p>
      <AddItemButton />
    </div>
  );
}

export default ItemDetail;

