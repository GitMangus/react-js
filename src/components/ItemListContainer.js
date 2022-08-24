import * as React from 'react';
import './ItemListContainer.css'

const ItemListContainer = ( {usuario}) => {
    return(
        <h2 className='greeting'>Bienvenido {usuario}</h2>
    )
}

export default ItemListContainer;