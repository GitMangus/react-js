import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {

  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  const { itemId } = useParams()

  console.log(itemId)
  console.log(item)

  useEffect(() => {
    setLoading(true);

    //Paso 1: Armar la ref (sync)
    const docRef = doc(db, 'productos', itemId)
    //Paso 2: LLamar a la DB (async)
    getDoc(docRef)
      .then((doc) => {
        setItem({ id: doc.id, ...doc.data() })
      })
      .finally(() => {
        setLoading(false)
      })

  }, [])

  return (
    <div>
      {
        loading 
        ? <Loader />
        : <ItemDetail item={item} />
      }
    </div>
  )

}

export default ItemDetailContainer;