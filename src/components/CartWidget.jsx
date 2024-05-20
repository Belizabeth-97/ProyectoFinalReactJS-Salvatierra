import { contexto } from "./Contexto"
import MiCarrito from "/carrito-compras.png"
import { useContext, useState } from "react"

function CartWidget() {

  return (
    <div>
      <button>
        <img src={MiCarrito} alt="" />
      </button>
    </div>
  )
}

export default CartWidget
