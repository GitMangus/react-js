import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const ItemDetailContainer = () => {

  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const { itemId } = useParams()

  console.log(itemId)
  console.log(item)

  useEffect(() => {
    setLoading(true);

    pedirDatos()
      .then((res) => {
        setItem(res.find((prod) => prod.id === Number(itemId)))
      })
      .catch(err => console.log(err))
      .finally(() => {
        setLoading(false);
      })
  }, [])

  return (
    <div>
      {
        loading ? <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box> : <ItemDetail item={item} />
      }
    </div>
  )

}

export default ItemDetailContainer;