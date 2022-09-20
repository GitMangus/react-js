import * as React from 'react';
import './ItemListContainer.css';
import { useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';


const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  
  const { categoryId } = useParams()
  //console.log(categoryId)

  useEffect(() => {
    setLoading(true);
    //Paso 1: Armar la ref (sync)
    const productosRef = collection(db, 'productos')
    const q = categoryId
      ? query(productosRef, where('category', '==', categoryId))
      : productosRef

    //Paso 2: Consumir la ref (async)
    getDocs(q)
      .then((resp) => {
        const productosDB = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        console.log(productosDB)

        setProductos(productosDB)
      })
      .finally(() => {
        setLoading(false)
      })

  }, [categoryId])



  return (
    <div>
      <h2 className='title'>Favoritos para tu mascota</h2>

      {
        loading
          ? <Loader />
          : <ItemList productos={productos} />
      }

    </div>
  )
}

export default ItemListContainer;




