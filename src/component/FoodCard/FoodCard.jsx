import React, { useContext } from 'react'
import './FoodCard.css'
import { Cartcontext } from '../../contaxt/Cartcontext'

export default function FoodCard({food}) {
const {addtocart, cart}=useContext(Cartcontext)




  return (
   <div className="foodcart">

<img src={food.img} alt="" /> 
    <h3>{food.title}</h3>
       <p>{food.category}</p>
            <strong>${food.price}</strong>

      <button onClick={()=> addtocart(food)}>
        Add To Cart
      </button>

   </div>
  )
}
