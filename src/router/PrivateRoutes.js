import React from 'react'
import NavBar from '../components/NavBar/NavBar';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../components/Cart/Cart';
import { Navigate, Route, Routes } from 'react-router-dom';
import Checkout from '../components/Checkout/Checkout';
import Footer from '../components/Footer/Footer';


const PrivateRoutes = () => {
    return (
        <>
            {/* Router Privado */}
            <NavBar />
            
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/productos/:categoryId' element={<ItemListContainer />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>

            <Footer />
        </>
    )
}

export default PrivateRoutes