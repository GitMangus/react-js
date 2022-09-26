import * as React from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
import useProducts from '../../hooks/useProducts';


const ItemListContainer = () => {

  const { productos, loading } = useProducts()

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




