
import { useContext } from 'react';
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
      <div>
        <Description {...producto}/>
      </div>
      <div>
       <ItemQuantitySelector handleConfirm={handleConfirm}/>
      </div>
    </div>
  );
}

export default ItemDetail;

