import React from 'react'
import { useState } from 'react'
import AddItemButton from './AddItemButton'

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
    <div className='flex p-2 mt-4 gap-8'>
      <div className="flex  gap-4">
        <button onClick={disminuir} className="p-3 bg-orange-600 rounded-sm">-</button>
        <p className='flex items-center'>{numero}</p>
        <button onClick={incrementar} className="p-3 bg-orange-600 rounded-sm">+</button>
      </div>
        <AddItemButton onClick={confirmar}/>
    </div>
  )
}
export default ItemQuantitySelector;