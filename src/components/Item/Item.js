import * as React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({ producto }) => {

    return (
        <div>
            <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={producto.img}
                    alt="alimento"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {producto.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {producto.description}
                    </Typography>
                    <span>$ {producto.price}</span>
                    <p>Stock {producto.stock}</p>
                    <ItemCount stock={producto.stock} />
                </CardContent>
            </Card>
        </div>
    )
}

export default Item;