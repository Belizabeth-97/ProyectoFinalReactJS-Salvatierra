import React from 'react'
import { useState } from 'react'

 function ItemQuantitySelector(props) {

  const [numero, setNumero] = useState (0)

  const incrementar = () => {
    setNumero(numero + 1)
  }

  const disminuir = () => {
    setNumero(numero - 1)
  }

  const confirmar = ()=> {
    props.handleConfirm(numero)
  }

  return (
    <div>
      <div className="flex gap-4">
        <button onClick={disminuir} className="p-3 bg-orange-600 rounded-sm">-</button>
        <p>{numero}</p>
        <button onClick={incrementar} className="p-3 bg-orange-600 rounded-sm">+</button>
      </div>
        <button onClick={confirmar}>Confirmar Cantidad</button>
    </div>
  )
}
export default ItemQuantitySelector;