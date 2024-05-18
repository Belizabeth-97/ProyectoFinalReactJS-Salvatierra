
import AddItemButton from './AddItemButton';
import Description from './Description';

function ItemDetail(producto) {
  return (
    <div>
      <Description {...producto}/>
      <AddItemButton />
    </div>
  );
}

export default ItemDetail;

