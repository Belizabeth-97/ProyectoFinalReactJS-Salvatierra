import MiCarrito from "/carrito-compras.png"
import { useState } from "react"

function CartWidget() {

  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter(counter + 1)
    console.log("click")
  }

  return (
    <div>
      <button onClick={handleClick}>
        <img src={MiCarrito} alt="" />
        <span>{counter}</span>
      </button>
    </div>
  )
}

export default CartWidget
