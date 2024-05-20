import { contexto } from "./Contexto"
import MiCarrito from "/carrito-compras.png"
import { useContext, useState } from "react"

function CartWidget() {

  const valorDelContexto = useContext(contexto)


  return (
    <div>
      <button>
        <img src={MiCarrito} alt="" />
      </button>
    </div>
  )
}

export default CartWidget


/*const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter(counter + 1)
    console.log("click")
  } */

/*
<button onClick={handleClick}>
<span>{counter}</span>*/