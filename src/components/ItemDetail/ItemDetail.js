import React from 'react';
import './ItemDetail.css'
import { CardContent, CardMedia, Typography, Box, Button } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ item }) => {
  return (
    <div className="container">

      <CardMedia
        component="img"
        sx={{ width: 300 }}
        height="450"
        image={item.img}
        alt="producto"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent
          sx={{ flex: '1 0 auto' }}>
          <Typography
            component="div"
            variant="h4">
            {item.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            fontSize="1.2rem"
            sx={{ mt: 2 }}
          >
            {item.description}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
            sx={{ mt: 2 }}
          >
            {item.descriptionTwo}
          </Typography>
          <Button
            variant="outlined"
            size="small"
            sx={{ mr: 2 }}
          >
            {item.options[0]}
          </Button>
          <Button
            variant="outlined"
            size="small"
          >
            {item.options[1]}
          </Button>
          <span className="item__precio">$ {item.price}</span>
          <p>Seleccione la cantidad:</p>
          <p className="stock">Stock {item.stock}</p>
          <ItemCount stock={item.stock} />
        </CardContent>
      </Box>

    </div>
  )
}

export default ItemDetail;