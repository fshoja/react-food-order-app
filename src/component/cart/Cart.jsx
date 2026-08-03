import React, { useContext } from 'react'
import './cart.css'
import { Cartcontext } from '../../contaxt/Cartcontext';
export default function Cart() {
    const { cart ,removeFromCart,increaseQuantity,quantity ,decreaseQuantity} = useContext(Cartcontext);
const total = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

  return (

    <>
        <div className="cart">
      <h2>Shopping Cart </h2>
      {
cart.length ===0 ?(
   <p>
            Cart is empty
          </p>
):(


    cart.map(item=>(
       <div>
    <div className="cart-item">
      <img src={item.img} alt="" />

              <h3>
                {item.title}
              </h3>

              <span>
                 ${item.price}
              </span>
               
       <button 
 onClick={() => removeFromCart(item.id)}
>
 Remove
</button>

        <div className="quantity">

  <button 
    onClick={() => decreaseQuantity(item.id)}
  >
    -
  </button>

  <span>
    {item.quantity}
  </span>

  <button 
    onClick={() => increaseQuantity(item.id)}
  >
    +
  </button>

</div>
    </div>



  </div> 
    ))
  

)
      }

    <div className="cart-total">
  <h2>Total: ${total.toFixed(2)}</h2>
</div>
    </div>
    


    </>




  )
}
