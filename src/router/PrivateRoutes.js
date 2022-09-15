import React from 'react'
import NavBar from '../components/NavBar/NavBar';
import Banner from '../components/Banner/Banner';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../components/Cart/Cart';
import { Navigate, Route, Routes } from 'react-router-dom';

const PrivateRoutes = () => {
    return (
        <>
            {/* Router Privado */}
            <NavBar />
            <Banner />

            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/productos/:categoryId' element={<ItemListContainer />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}

export default PrivateRoutes