import React from 'react'
import Home from './pages/Home'
import './App.css'
import { CartcontextProvider } from './contaxt/Cartcontext'
import Menu from './pages/Menu'
import CartPage from './pages/CartPage'
import { Route, Routes } from 'react-router-dom'
export default function App() {
  return (
    <CartcontextProvider>
 

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/menu' element={<Menu/>}/>
  <Route path='/cart' element={<CartPage/>}/>
</Routes>
    </CartcontextProvider>

  )
}
