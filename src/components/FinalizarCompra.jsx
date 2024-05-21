import React, { useContext, useState } from 'react'
import DetalleCompra from './DetalleCompra';
import { createSale } from '../function';
import { toast } from 'react-toastify';
import { contexto } from './Contexto';
import { useNavigate } from 'react-router-dom';


 function FinalizarCompra() {

    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [numeroOrden, setNumeroOrden] = useState("");

    const contextoCarrito = useContext(contexto)

    const navegador = useNavigate()

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
            .then(id => setNumeroOrden(id))
        toast.dismiss()
        toast.success("Su compra se realizó exitosamente!", { autoClose: 1000 })

        setShowPopup(!showPopup)
      }

      const finalizarProceso = () =>{
        contextoCarrito.vaciarCarrito()
        setShowPopup(!showPopup)
        navegador('/') 
      }

  return (
    <>
    <div>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-lg font-bold mb-4">¡Muchas gracias por su compra!</h2>
            <p className=' font-light'>Su orden ha sido generada bajo el #{numeroOrden} </p>
            <button onClick={finalizarProceso} className="mt-4 p-2 border border-gray-500 rounded-md">Cerrar</button>
          </div>
        </div>
      )}
    </div>
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
    </>
  )
}
export default FinalizarCompra;