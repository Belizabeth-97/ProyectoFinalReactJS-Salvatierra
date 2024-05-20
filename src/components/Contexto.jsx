import { createContext, useState } from "react";

export const contexto = createContext ();
const Provider = contexto.Provider;

 function CarritoProvider(props) {

    const [unidadesCarrito, setUnidadesCarrito] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)
    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (cantidadProducto, producto) => {
      setUnidadesCarrito(unidadesCarrito + cantidadProducto)

      const copia = [...carrito]
      const item = {
        producto,
        cantidadProducto
      }
      copia.push(item)
      setCarrito(copia)

    }

    const borrarDelCarrito = (id) => {
        const carritoActualizado = carrito.filter(item => item.id !== id)
        setCarrito(carritoActualizado)
    }

    const vaciarCarrito = () => {
        setCarrito([]);
        setUnidadesCarrito(0);
        setPrecioTotal(0);
    }

    const actualizacionCarrito ={
        carrito : carrito,
        unidadesCarrito : unidadesCarrito,
        precioTotal : precioTotal,
        agregarAlCarrito : agregarAlCarrito,
        borrarDelCarrito : borrarDelCarrito,
        vaciarCarrito : vaciarCarrito,
    }

  return (
    <Provider value={actualizacionCarrito}>
        {props.children}
    </Provider>
  )
}

export default CarritoProvider;