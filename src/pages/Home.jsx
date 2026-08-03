import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Hero from '../component/hero/Hero'
import FoodList from '../component/FoodList/FoodList'
import Cart from '../component/cart/Cart'
import Footer from '../component/footer/Footer'

export default function Home() {
  return (
  <>
  <Navbar/>
   <Hero />
 <FoodList />
 <Cart />
 <Footer />
  </>
  )
}
