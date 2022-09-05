import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    return (
            <IconButton aria-label="shopping cart" size="large" color="inherit" sx={{ ml: 20 }}>
              <ShoppingCartIcon/>
            </IconButton>       
    )
}

export default CartWidget;
