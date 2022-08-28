import * as React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import ItemCount from './ItemCount';

const ItemCard = ({ imagen, nombre, descripcion, precio, stock }) => {

    return (
        <div>
            <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={imagen}
                    alt="alimento"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {nombre}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {descripcion}
                    </Typography>
                    <span>$ {precio}</span>
                    <span>Stock {stock}</span>
                    <ItemCount stock={stock} />
                </CardContent>
            </Card>
        </div>

    );
}

export default ItemCard