import React from 'react';
import './ItemDetail.css'
import { CardContent, CardMedia, Typography, Box } from '@mui/material';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import Select from "../Select/Select"


const ItemDetail = ({ item }) => {

  const { cart, addToCart, isInCart } = useCartContext()
  console.log(cart)

  const [cantidad, setCantidad] = useState(1)
  const [option, setOption] = useState(item.options[0].value)

  const handleAgregar = () => {
    const itemToCart = {
      id: item.id,
      img:item.img,
      name: item.name,
      price: item.price,
      description: item.description,
      option,
      cantidad
    }

    console.log(isInCart(item.id))
    addToCart(itemToCart)
  }

  // if (stock === 0) { condicionar para que se deshabilite el counter}

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

          <Select options={item.options} onSelect={setOption}/>

          <span className="item__precio">$ {item.price}</span>
          <p className="stock">Stock {item.stock}</p>
          <p>Seleccione la cantidad:</p>

          {
            isInCart(item.id)
              ? <Link to='/cart'>Finalizar compra</Link>
              : <ItemCount stock={item.stock}
                counter={cantidad}
                setCounter={setCantidad}
                handleAgregar={handleAgregar} />
          }

        </CardContent>
      </Box>

    </div>
  )
}

export default ItemDetail;