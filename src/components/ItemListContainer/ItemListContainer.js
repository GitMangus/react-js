import * as React from 'react';
import { useEffect, useState } from "react";
import { pedirDatos } from '../../helpers/pedirDatos';
import ItemList from '../ItemList/ItemList';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    pedirDatos()
      .then(res => {
        setProductos(res);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        console.log(error)
      })
      .finally(() => {
        // console.log("Fin del proceso")
      })
  }, [])

  return (
    <div>
      {
        loading ? <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box> : <ItemList productos={productos} />
      }
    </div>
  )
}

export default ItemListContainer;




