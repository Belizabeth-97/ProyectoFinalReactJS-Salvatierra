
import { useContext } from 'react';
import Description from './Description';
import ItemQuantitySelector from './ItemQuantitySelector';
import { contexto } from './Contexto';
import { toast } from 'react-toastify';

function ItemDetail(producto) {

  const contextoActual = useContext (contexto)

  const handleConfirm = (numero) => {
    contextoActual.agregarAlCarrito(numero, producto)
    toast("Se agregó al carrito", { autoClose: 1000 })
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

