import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

  const { cartQuantity } = useContext(CartContext)


  return (
    <Link to='/cart'>
      <IconButton aria-label="shopping cart" size="large" color="inherit" sx={{ ml: 20 }}>
        <ShoppingCartIcon />
      </IconButton>
      <span>{cartQuantity}</span>
    </Link>
  )
}

export default CartWidget;
