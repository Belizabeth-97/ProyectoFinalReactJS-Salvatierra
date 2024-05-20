import React from 'react'

 function Description(producto) {
  return (
    <div>
      <h2 className='text-center from-stone-600 font-light text-2xl'>Detalle del Producto</h2>
      <p className='p-2 from-stone-600 text-lg font-bold'>{producto.nombre}</p>
      <section className='grid grid-cols-1 lg:grid-cols-2'>
        <div>
          <img className= "w-80 h-80 rounded-md"src={producto.imagen} alt={""} />
        </div>
        <div className='flex flex-col gap-8'>
          <h3 className='p-1 text-lg font-semibold from-stone-600'>Ingredientes: </h3>
          <p className='p-1 font-light'>{producto.descripcion}</p>
        </div>
      </section>
    </div>
  )
}
export default Description;