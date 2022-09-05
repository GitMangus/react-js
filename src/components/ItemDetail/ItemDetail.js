import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ item }) => {
  return (
    <div>
      <Card sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          height="300"
          image={item.img}
          alt="producto"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {item.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {item.description}
            </Typography>
            <span>$ {item.price}</span>
            <p>Stock {item.stock}</p>
            
            <ItemCount stock={item.stock} />
          </CardContent>
        </Box>
      </Card>
    </div>
  )
}

export default ItemDetail;