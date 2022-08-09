import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../../components/navbar/navbar'
import Cart from '../../pages/cart/cart'
import Main from '../../pages/home/main'
import Page404 from '../../pages/notFound/Page404'
import ProductDetail from '../../pages/productDetail/productDetail'

const Routers = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/product/detail/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers