import React from 'react'
import { useCartContext } from '../../context/CartContext';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Button, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './Cart.css';


const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useCartContext()

    if (cart.length === 0) {
        return (
            <div className='cart__title'>
                <h2 >Tu carrito está vacío</h2>

                <Link to="/">Ir a comprar</Link>
            </div>
        )
    }

    return (
        <div className='cart'>
            <div>
                <ShoppingBasketIcon />
                <h2 className='cart__title'>MI CARRITO</h2>
            </div>

            {cart.map((item) => (
                <Card key={item.id} 
                className='cart__card'
                sx={{ width: 700 }}
                >

                    <CardMedia
                        component="img"
                        sx={{ width: 200 }}
                        height="250"
                        image={item.img}
                        alt="producto"
                    />

                    <CardContent>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <span>Precio: ${item.price}</span>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Opción: {item.option}</p>
                    <Button onClick={() => removeItem(item.id)}>Eliminar<DeleteForeverIcon /></Button>    
                    </CardContent>
                </Card>
            ))}

            <h4>Total: ${cartTotal()}</h4>
            <Button onClick={emptyCart} variant="contained">Vaciar carrito</Button>
        </div>
    )
}

export default Cart