import * as React from 'react';
import './Item.css'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {

    return (
        <div>
            <Card sx={{ maxWidth: 300, m:2 }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={producto.img}
                    alt="producto"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {producto.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {producto.description}
                    </Typography>
                    <span className="item__precio">$ {producto.price}</span>
                    <p>Stock {producto.stock}</p>
                    <ItemCount stock={producto.stock} />
                    <Link to={`/item/${producto.id}`}>Ver más</Link>
                </CardContent>
            </Card>
        </div>
    )
}

export default Item;