import * as React from 'react';
import './ItemListContainer.css';
import Banner from '../../components/Banner/Banner';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
import useProducts from '../../hooks/useProducts';


const ItemListContainer = () => {

  const { productos, loading } = useProducts()

  return (
    <div>
      <Banner />
      <h3 className='title'>Favoritos para tu mascota</h3>

      {
        loading
          ? <Loader />
          : <ItemList productos={productos} />
      }

    </div>
  )
}

export default ItemListContainer;