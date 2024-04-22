import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router'
import Home from './Pages/Home/Home'
import Order from './Pages/Order/Order'
import Cart from './Pages/Cart/Cart'
import Nopage from './Pages/Nopage/Nopage'
import Products from './Pages/Products/Products'
import MyState from './Context/Data/myState'
import SignUp from './Pages/registration/SignUp'
import ProductInfo from './Pages/product_Info/ProductInfo'
import { ToastContainer } from 'react-toastify'
import SignIn from './Pages/registration/Login'

function App() {

  return (
    <>
    <MyState>
        <Routes>
          <Route path="/"  element={<SignIn/>}/>
          <Route path="/home"  element={<Home/>}/>
          <Route path="/order"  element={<Order/>}/>
          <Route path="/products"  element={<Products/>}/>
          <Route path="/cart"  element={<Cart/>}/>
          <Route path="/productinfo/:id"  element={<ProductInfo/>}/>
          <Route path="/signup"  element={<SignUp/>}/>
          <Route path="/*"  element={<Nopage/>}/>
        </Routes>
      <ToastContainer/>
    </MyState>
    </>
  )
}

export default App
