import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import Account from '../pages/Account'
import ProductInfo from '../components/product/ProductInfo'
import Cart from '../pages/Cart'


const Routers : React.FC = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/account' element={<Account />} />
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product-info' element={<ProductInfo />} />
        </Routes>
    )
}

export default Routers