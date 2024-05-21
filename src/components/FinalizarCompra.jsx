import React from 'react'
import DetalleCompra from './DetalleCompra';

 function FinalizarCompra() {
  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-md shadow-md'>
      <form className="space-y-4">
        <p className=' text-lg font-bold'>Completa tus datos para el envío de tu pedido</p>
        <label className="block">
            <input type="text" placeholder='Nombre' className="w-full border border-gray-500 rounded-md shadow-sm focus:ring focus:ring-opacity-75" ></input>
        </label>
        <label className="block">
            <input type="text" placeholder='Teléfono' className="w-full border border-gray-500 rounded-md shadow-sm focus:ring focus:ring-opacity-75"></input>
        </label>
        <label className="block">
            <input type="text" placeholder='Dirección' className="w-full border border-gray-500 rounded-md shadow-sm focus:ring focus:ring-opacity-75"></input>
        </label>
      </form>
      <DetalleCompra/>
    </div>
  )
}
export default FinalizarCompra;