
import { useContext } from 'react';
import AddItemButton from './AddItemButton';
import Description from './Description';
import ItemQuantitySelector from './ItemQuantitySelector';
import { contexto } from './Contexto';

function ItemDetail(producto) {

  const contextoActual = useContext (contexto)

  const handleConfirm = (numero) => {
    contextoActual.agregarAlCarrito(numero, producto)
  }

  return (
    <div>
      <Description {...producto}/>
      <AddItemButton />
      <ItemQuantitySelector handleConfirm={handleConfirm}/>
    </div>
  );
}

export default ItemDetail;

