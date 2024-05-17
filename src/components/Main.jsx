import { Route, Routes } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"
import Inicio from "../Pages/Inicio"
import Contacto from "../Pages/Contacto"
import PageNotFound from "./PageNotFound"
import ItemDetailContainer from "./ItemDetailContainer"


function Main () {
    return (
        <main className="p-10 grow bg-orange-200">
            <Routes>
                <Route path='/' element={<Inicio/>}></Route>
                <Route path='/Menu' element={<ItemListContainer/>}></Route>
                <Route path='/Contacto' element={<Contacto/>}></Route>
                <Route path="/Menu/:id" element={<ItemDetailContainer/>}></Route>
                <Route path='/*' element={<PageNotFound/>}></Route>
            </Routes> 
        </main>
    )
}

export default Main;