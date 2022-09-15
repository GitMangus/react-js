import * as React from 'react';
import './ItemListContainer.css';
import { useEffect, useState } from "react";
import { pedirDatos } from '../../helpers/pedirDatos';
import ItemList from '../ItemList/ItemList';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()
  //console.log(categoryId)

  useEffect(() => {
    setLoading(true);

    pedirDatos()
      .then(res => {
        if(!categoryId){
          setProductos(res);
        } else {
          setProductos(res.filter ((prod) => prod.category === categoryId));
        }
        
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false);
      })
  }, [categoryId])



  return (
    <div>
      <h2 className='title'>Favoritos para tu mascota</h2>
      
      {
        loading 
        ? <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box> 
        : <ItemList productos={productos} />
      }
      
    </div>
  )
}

export default ItemListContainer;




