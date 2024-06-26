import { Route, Routes } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"
import Inicio from "../Pages/Inicio"
import Contacto from "../Pages/Contacto"
import PageNotFound from "./PageNotFound"
import ItemDetailContainer from "./ItemDetailContainer"
import DetalleCompraContainer from "./DetalleCompraContainer"
import FinalizarCompra from "./FinalizarCompra"


function Main () {
    return (
        <main className="p-10 grow bg-zinc-300">
            <Routes>
                <Route path='/' element={<Inicio/>}></Route>
                <Route path='/Menu' element={<ItemListContainer/>}></Route>
                <Route path='/Contacto' element={<Contacto/>}></Route>
                <Route path='/Tienda' element={<DetalleCompraContainer/>}></Route>
                <Route path="/ProcesoDeOrden" element={<FinalizarCompra/>}></Route>
                <Route path="/Menu/:id" element={<ItemDetailContainer/>}></Route>
                <Route path='/*' element={<PageNotFound/>}></Route>
            </Routes> 
        </main>
    )
}

export default Main;