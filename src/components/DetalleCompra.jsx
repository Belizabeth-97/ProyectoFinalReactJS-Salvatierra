import React, { useContext } from 'react'
import { contexto } from './Contexto';

function DetalleCompra() {

    const contextoCarrito = useContext(contexto)

  return (
    <div>
      <div className="flex flex-col max-w-md p-6 space-y-4 divide-y sm:w-96 sm:p-10 dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
      <h2 className="text-2xl font-semibold">Detalle de Compra</h2>
      <ul className="flex flex-col pt-4 space-y-2">
      {contextoCarrito.carrito.map((item) => (
         <li className="flex items-start justify-between" key={item.producto.id}>
         <h3>
           <p>{item.producto.nombre}</p>
           <span className="text-sm">x{item.cantidadProducto}</span>
         </h3>
         <div className="text-right">
           <span className="block">${item.producto.precio * item.cantidadProducto}</span>
         </div>
       </li>
      ))}

      </ul>
      <div className="pt-4 space-y-2">
        <div>
          <div className="flex justify-between">
            <span>Total: </span>
            <section>$
                {contextoCarrito.carrito
                    .map(item => item.producto.precio * item.cantidadProducto)
                    .reduce((acumulador, precioActual) => acumulador + precioActual, 0)}
            </section>
          </div>
          <div className="flex items-center space-x-2 text-xs">
          </div>
        </div>
      </div>
      <div className="pt-4 space-y-2">
        <div className="space-y-6">
          <button type="button" className="w-full py-2 font-semibold border rounded dark:bg-indigo-600 dark:text-gray-50 dark:border-indigo-600">
            Ir a pagar
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}
export default DetalleCompra;