import React, {createContext, useState} from "react";
import all_product from '../assets/all_product'

const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for(let i=0; i < all_product.length+1; i++){
    cart[i] = 0
  }
  return cart;
}
export {ShopContext};

const ShopContextProvider = (props) => {
  
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) =>{
    setCartItems((prev) =>({...prev, [itemId]:prev[itemId]+1}));
  }
  const removeFromCart = (itemId) =>{
    setCartItems((prev) =>({...prev, [itemId]:prev[itemId]-1}));
  }
  
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems) {
      if(cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item))
        totalAmount += itemInfo.new_price * cartItems[item]
      }
    }
    return totalAmount
  }

  const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount};
  return(
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;
