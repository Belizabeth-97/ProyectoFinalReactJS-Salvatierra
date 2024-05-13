import { Route, Routes } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"
import Inicio from "../Pages/Inicio"
import Menu from "../Pages/Menu"
import Contacto from "../Pages/Contacto"

function Main () {
    return (
        <main className="p-6 grow bg-orange-200">
            <Routes>
                <Route path='/' element={<Inicio/>}></Route>
                <Route path='/Menu' element={<Menu/>}></Route>
                <Route path='/Contacto' element={<Contacto/>}></Route>
                
            </Routes> 
        </main>
    )
}

export default Main 

/*
<h1 className="text-center h-20 text-amber-950">Catálogo de productos</h1>
*/