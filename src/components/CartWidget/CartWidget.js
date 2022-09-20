import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './CartWidget.css'

const CartWidget = () => {

  const { cartQuantity, cart } = useContext(CartContext)


  return (
    <Link to='/cart' className={`widget ${cart.length > 0 ? 'widget-visible' :''}`}>
      <IconButton aria-label="shopping cart" size="large" color="inherit" sx={{ ml: 20 }}>
        <ShoppingCartIcon />
        <span className='cart__quantity'>{cartQuantity()}</span>
      </IconButton>
    </Link>
  )
}

export default CartWidget;
