import { Link } from "react-router-dom"


function CardProducts(producto) {
  
  const { nombre , imagen , id } = producto

  return (
    <div className="card-products bg-orange-300 max-w-xs p-6 rounded-md shadow-md hover:scale-105">
      <img src="/Hamburguesa-fondo-negro.jpg" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"/>
      <h2 className="font-bold h-10 p-2 text-center">{nombre}</h2>
      <Link to={id} className=" bg-orange-400 flex items-center justify-center w-full p-3 tracking-wide rounded-md font-light ">Comprar</Link>
    </div>
  )
}

export default CardProducts;
