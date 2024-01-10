import { createContext, useEffect, useReducer } from "react";
import cartItems from "../data";
import reduser from "../reduser/reduser";
import { useContext } from "react";

const CartContext = createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduser, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const changeQuantity = (changeObj) => {
    dispatch({ type: "CHANGE_QUANTITY", payload: changeObj});
  };
  useEffect(()=>{
    dispatch({ type: "GET_TOTALS" });
  },[state.cart])

  
  return (
    <CartContext.Provider value={{ ...state, clearCart ,remove ,changeQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
