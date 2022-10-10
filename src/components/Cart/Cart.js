import React from 'react'
import { useCartContext } from '../../context/CartContext';
import DeleteIcon from '@mui/icons-material/DeleteForever';
import { Button, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './Cart.css';
import Banner from '../Banner/Banner';

const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useCartContext()

    if (cart.length === 0) {
        return (
            <div>
                <Banner />
                <div className='cart__empty'>
                    <h2>Tu carrito está vacío</h2>
                    <br/>
                    <h4 className='cart__subtotal'>Subtotal: ${cartTotal()}</h4>
                    <br/>
                    <p>¡No te pierdas las ofertas que tenemos para tu mascota!</p>
                    <br/>
                    <Link to="/"><Button variant="outlined">Comprar</Button></Link>
                </div>
            </div>
        )
    }

    return (
        <div className='cart'>
            <div>
                <div>
                    <ShoppingBasketIcon
                        sx={{ mr: 2 }}
                    />
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
                            <div className="cart__content">
                                <p>{item.description}</p>
                                <p>Cantidad: {item.cantidad}</p>
                                <p>Opción: {item.option}</p>
                                <span className='cart__price'>Precio: ${item.price}</span>
                            </div>

                            <Button onClick={() => removeItem(item.id)}
                                endIcon={<DeleteIcon />}
                                variant="outlined"
                            >
                                Eliminar</Button>
                        </CardContent>
                    </Card>
                ))}
                <Button onClick={emptyCart} sx={{ m: 2 }} variant="contained">Vaciar carrito</Button>
            </div>

            <div className='cart__resumen'>
                <h3 className='cart__title'>Resumen de mi orden</h3>
                <hr />
                <h4 className='cart__total'>Total: ${cartTotal()}</h4>

                <Link
                    to='/checkout'
                ><Button variant="contained" color="success">Finalizar compra</Button>
                </Link>
            </div>
        </div>
    )
}

export default Cart