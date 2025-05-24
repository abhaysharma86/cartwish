import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from "../Home/HomePage";
import ProductsPage from "../products/ProductsPage";
import SingleProductPage from "../singleProduct/SingleProductPage";
import CartPage from "../cart/CartPage";
import MyOrderPage from "../myOrder/MyOrderPage";
import LoginPage from "../Authentication/LoginPage";
import SignupPage from './../Authentication/SignupPage';


const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/products' element={<ProductsPage />}/>
        <Route path='/product/:id' element={<SingleProductPage />}/>
        <Route path='/signup' element={<SignupPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/cart' element={<CartPage />}/>
        <Route path='/myorder' element={<MyOrderPage />}/>

    </Routes>
  )
}

export default Routing