import React, { useContext, useState } from 'react'
import DetalleCompra from './DetalleCompra';
import { createSale } from '../function';
import { toast } from 'react-toastify';
import { contexto } from './Contexto';


 function FinalizarCompra() {

    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');

    const contextoCarrito = useContext(contexto)

    const handleSubmit = (e) => {
        e.preventDefault()
        toast.loading("Procesando pedido")

        const datosCliente = {nombre, telefono, direccion}

        const productosComprados = contextoCarrito.carrito.map(item => {
            return {      
                id : item.producto.id,
                nombre : item.producto.nombre,
                precio : item.producto.precio,
                cantidad : item.cantidadProducto,
            }
        })
          console.log(productosComprados)

          const total = contextoCarrito.carrito
          .map(item => item.producto.precio * item.cantidadProducto)
          .reduce((acumulador, precioActual) => acumulador + precioActual, 0)

        createSale(datosCliente, total , productosComprados)
        toast.dismiss()
        toast.success("Su compra se realizó exitosamente!")
      }

  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-md shadow-md'>
      <form onSubmit={handleSubmit} className="space-y-4">
        <p className=' text-lg font-bold'>Completa tus datos para el envío de tu pedido</p>
        <label className="block">
            <input type="text" onChange={(e) => setNombre(e.target.value)} value={nombre} placeholder='Nombre' className="w-full border border-gray-500 rounded-md shadow-sm focus:ring focus:ring-opacity-75" ></input>
        </label>
        <label className="block">
            <input type="text" onChange={(e) => setTelefono(e.target.value)} value={telefono} placeholder='Teléfono' className="w-full border border-gray-500 rounded-md shadow-sm focus:ring focus:ring-opacity-75"></input>
        </label>
        <label className="block">
            <input type="text" onChange={(e) => setDireccion(e.target.value)} value={direccion} placeholder='Dirección' className="w-full border border-gray-500 rounded-md shadow-sm focus:ring focus:ring-opacity-75"></input>
        </label>
        <DetalleCompra/>
        <button className='mx-auto p-2 border border-gray-500 rounded-md flex items-center justify-center tracking-wide font-light'>Generar Orden</button>
      </form>
    </div>
  )
}
export default FinalizarCompra;