import { createContext, useState } from "react";


export const Cartcontext =createContext(null)

export const CartcontextProvider=({children})=>{

  const [cart, setCart] = useState([]);

    const addtocart=(food)=>{
setCart([
  ...cart,
  {
    ...food,
    quantity: 1
  }
])
  }

const removeFromCart = (id) => {
  setCart(
    cart.filter((item) => item.id !== id)
  );
};


const increaseQuantity = (id) => {
setCart(cart.map(item => item.id===id ? {...item, quantity: item.quantity +1}: item))
}
const decreaseQuantity  = (id) => {
setCart(cart.map(item => item.id ===id && item.quantity > 1 ?{...item, quantity: item.quantity -1}: item))
}

  return(
    <Cartcontext.Provider value={{cart, setCart , addtocart, removeFromCart,increaseQuantity, decreaseQuantity,}}>
        {children}
    </Cartcontext.Provider>
  )

  

}