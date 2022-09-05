import React from 'react';
import './ItemDetail.css'
import { Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ item }) => {
  return (
    <div className="container">
      <Card sx={{ display: 'flex', maxWidth:700 }}>
        <CardMedia
          component="img"
          sx={{ width: 300 }}
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
            <Typography variant="subtitle2" color="text.secondary" component="div">
              {item.descriptionTwo}
            </Typography>
            <Button variant="outlined" size="small" sx={{ mr: 2 }}>{item.options[0]}</Button>
            <Button variant="outlined" size="small">{item.options[1]}</Button>
            <span className="item__precio">$ {item.price}</span>
            <p>Stock {item.stock}</p>
            <ItemCount stock={item.stock} />
          </CardContent>
        </Box>
      </Card>
    </div>
  )
}

export default ItemDetail;