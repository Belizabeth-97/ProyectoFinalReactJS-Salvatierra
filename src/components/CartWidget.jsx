
import MiCarrito from "/carrito-compras.png"
import { useNavigate } from "react-router-dom"


function CartWidget() {

  const navegador = useNavigate()

  const handleClick = () => {
      navegador('/Tienda')
  }


  return (
    <div>
      <button onClick={handleClick}>
        <img src={MiCarrito} alt="" />
      </button>
    </div>
  )
}

export default CartWidget
