import { collection, getDocs, getFirestore, getDoc, doc, addDoc, serverTimestamp } from "firebase/firestore"
import { app } from "./firebase"

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
            producto.id = doc.id
            return producto
        })
        .catch((error)=>{
            console.log(error)
        })
}

export const createSale = () => {
    const baseDeDatos = getFirestore (app)
    const salesCollection = collection(baseDeDatos, "Ventas")
    const venta = {
        items : [],
        usuario: {Nombre:"" , Telefono:"", Direccion:""},
        fechaDeCompra: serverTimestamp (),
        total: 0,
    }
    const consulta = addDoc(salesCollection, venta)

    consulta
        .then((resultado)=>{
            console.log(resultado)
        })
        .catch((error)=> {
            console.log(error)
        })
}