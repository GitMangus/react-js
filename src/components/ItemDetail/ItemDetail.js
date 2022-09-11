import React from 'react';
import './ItemDetail.css'
import { CardContent, CardMedia, Typography, Box } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import Select from '../Select/Select';



const ItemDetail = ({ item }) => {

  const [cantidad, setCantidad] = useState(1) //Estado: variable de la cual mi comp. depende p/su renderizado 
  const [option, setOption] = useState(item.options[0].value)

  const handleAgregar = () => {
    const itemToCart = {
      id: item.id,
      nombre: item.name,
      precio: item.price,
      option,
      cantidad
    }
    console.log(itemToCart)
  }


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

          <Select options={item.options} onSelect={setOption} />

          <span className="item__precio">$ {item.price}</span>
          <p>Seleccione la cantidad:</p>
          <p className="stock">Stock {item.stock}</p>



          <ItemCount stock={item.stock}
            counter={cantidad}
            setCounter={setCantidad}
            handleAgregar={handleAgregar} />
        </CardContent>
      </Box>

    </div>
  )
}

export default ItemDetail;