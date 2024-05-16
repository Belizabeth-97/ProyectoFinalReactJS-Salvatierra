import React from 'react'

function AddItemButton({ onClick }) {
    return (
        <button onClick={onClick} className="btn-add-to-cart bg-orange-600 flex items-center justify-center p-3 tracking-wide rounded-md font-light">
            Comprar
        </button>
    );
}

export default AddItemButton;