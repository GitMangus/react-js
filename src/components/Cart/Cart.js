import React from 'react'
import { useCartContext } from '../../context/CartContext';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useCartContext()

    if (cart.length === 0) {
        return ( 
            <div>
                <h2>Tu carrito está vacío</h2>
              
                <Link to="/">Ir a comprar</Link>
            </div>
        )
    } 

    return (
        <div>
            <h2>Carrito</h2>

            {cart.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Precio: {item.price}</p>
                    <p>Cantidad: {item.cantidad}</p>
                    <small>Opción:{item.options}</small>
                    <Button onClick={() => removeItem(item.id)}><DeleteForeverIcon /></Button>
                </div>
            ))}

            <h4>Total: ${cartTotal()}</h4>
            <button onClick={emptyCart}>Vaciar carrito</button>
        </div>
    )
}

export default Cart