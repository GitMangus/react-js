import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    return (
            <IconButton aria-label="shopping cart" sx={{ fontSize: 30 }} color="inherit">
              <ShoppingCartIcon/>
            </IconButton>       
    )
}

export default CartWidget;
