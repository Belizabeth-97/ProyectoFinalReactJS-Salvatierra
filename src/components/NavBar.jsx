import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import { useContext } from "react"
import { contexto } from "./Contexto"

function NavBar (){ 

    const valorDelContexto = useContext(contexto)

    return (
        <nav className="flex flex-row justify-end from-stone-600 gap-8">
            <Link to="">Inicio</Link>
            <Link to="/Menu">Menú</Link>
            <Link to="/Contacto">Contacto</Link>
            <CartWidget/>
            {valorDelContexto.unidadesCarrito}
        </nav>
    )
}


export default NavBar;