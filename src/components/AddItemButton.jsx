import React from 'react'

function AddItemButton({onClick}) {
    return (
        <button 
            onClick={onClick} 
            className="
            p-2 btn-add-to-cart bg-zinc-500
            flex items-center justify-center 
            tracking-wide rounded-md font-light">
            Agregar al Carrito
        </button>
    );
}

export default AddItemButton;