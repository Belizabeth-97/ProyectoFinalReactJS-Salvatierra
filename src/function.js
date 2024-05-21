import { collection, getDocs, getFirestore, getDoc, doc, addDoc, serverTimestamp } from "firebase/firestore"
import { app } from "./firebase"
import DetalleCompra from "./components/DetalleCompra"

export const getProducts = () => {
    const baseDeDatos = getFirestore (app)

    const productosCollection = collection(baseDeDatos, "Productos") 
   
    const query = getDocs(productosCollection)  
    
    return query
        .then((resultado) => {
          const productos = resultado.docs.map(doc => doc.data())
          return productos
        })
        .catch((error)=>{
            console.log(error)
        })
}

export const getProductsDetails = (id) => {

    const baseDeDatos = getFirestore (app)
    const productosCollection = collection(baseDeDatos, "Productos")
    const filtro = doc(productosCollection, id)
    const consulta = getDoc(filtro)

    return consulta    
        .then((resultado)=>{
            const producto = resultado.data()
            return producto
        })
        .catch((error)=>{
            console.log(error)
        })
}

export const createSale = (datosCliente, total, productosComprados) => {
    const baseDeDatos = getFirestore (app)
    const salesCollection = collection(baseDeDatos, "Ventas")
    const venta = {
        items : productosComprados,
        usuario: {
            nombre: datosCliente.nombre, 
            telefono: datosCliente.telefono, 
            direccion: datosCliente.direccion
        },
        fechaDeCompra: serverTimestamp (),
        total: total,
    }
    const consulta = addDoc(salesCollection, venta)

    return consulta
        .then((resultado)=>{
            console.log(resultado)
            return resultado.id
        })
        .catch((error)=> {
            console.log(error)
        })
}