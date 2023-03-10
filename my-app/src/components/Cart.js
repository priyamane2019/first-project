import React from 'react'
import { createContext, useReducer, useEffect } from 'react';
import {reducer} from "./reducer"
import Maincart from './Maincart';
import "./Cart.css"
import { products } from './Products';
export const CartContext = createContext();



const initialState = {
  item:products,
  totalAmount:0,
  totalItem:0,
};
const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const removeItem = (id) =>
  {
    return dispatch({
      type:"REMOVEITEM", 
      payload:id,
    })
  }
  const clearAll = () =>
  {
    return dispatch({
      type:"CLEARALL", 
    })
  }

  const increment = (id) =>
  {
    return dispatch({
      type:"INCREMENT", 
      payload:id,
    })
  }

  const decrement = (id) =>
  {
    return dispatch({
      type:"DECREMENT", 
      payload:id,
    })
  }

  useEffect(()=>
  {
    dispatch({type:"TOTALQUANTITY"});
  },[state.item])

  return (
      <>
    <CartContext.Provider value={{...state, removeItem, clearAll, increment, decrement}}>
        <Maincart />
    </CartContext.Provider>
    </>
  )
}

export default Cart

