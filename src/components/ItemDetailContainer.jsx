import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getProductsDetails } from '../function';

function ItemDetailContainer() {

    const { id } = useParams();
    const [producto, setProducto] = useState({}); 

  useEffect(() => {
      getProductsDetails(id)
        .then((resultado)=>{
          setProducto(resultado)
        })
  }, [id]);

  return (
    <div>
      <ItemDetail {...producto}/>
    </div>
  );
}

export default ItemDetailContainer;




  