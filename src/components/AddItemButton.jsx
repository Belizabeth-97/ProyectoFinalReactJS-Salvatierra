import React from 'react'

function AddItemButton({onClick}) {
    return (
        <button 
            onClick={onClick} 
            className="
            p-2 btn-add-to-cart bg-orange-400 
            flex items-center justify-center 
            tracking-wide rounded-md font-light"
        >
            Confirmar Cantidad
        </button>
    );
}

export default AddItemButton;