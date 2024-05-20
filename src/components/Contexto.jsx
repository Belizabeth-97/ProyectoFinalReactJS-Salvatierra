import { createContext, useState } from "react";

export const contexto = createContext ();
const Provider = contexto.Provider;

 function CarritoProvider(props) {

    const [unidadesCarrito, setUnidadesCarrito] = useState (0)
    const [precioTotal, setPrecioTotal] = useState(0)
    const [carrito, setCarrito] = useState (0)

    const agregarAlCarrito = (cantidadProducto, item) => {
      setUnidadesCarrito(unidadesCarrito + cantidadProducto)
    }

    const borrarDelCarrito = (id) => {
        
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