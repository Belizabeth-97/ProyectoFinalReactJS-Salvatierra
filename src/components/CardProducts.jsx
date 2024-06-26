import { Link } from "react-router-dom"


function CardProducts(producto) {

  const { nombre , imagen , id } = producto

  return (
    <div className="card-products bg-zinc-500 max-w-xs p-6 rounded-md shadow-md hover:scale-105">
      <img src={imagen} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"/>
      <h2 className="font-bold h-10 p-2 text-center">{nombre}</h2>
      <Link to={`/Menu/${id}`} className=" bg-zinc-300 flex items-center justify-center w-full p-3 tracking-wide rounded-md font-light ">Detalle</Link>
    </div>
  )
}

export default CardProducts;
