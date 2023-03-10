import React from 'react'
import { FaRupeeSign } from 'react-icons/fa';
import { FaRegHeart } from "react-icons/fa";

import { CartContext } from "./Cart"
import {useContext} from 'react'


const Items = ({id, title,   description,   price,  img,  quantity}) => {
  // const { removeItem } = useContext(CartContext);
  // const { increment } = useContext(CartContext);
  // const { decrement } = useContext(CartContext);
  const { removeItem, increment, decrement } = useContext(CartContext);
  return (
    <>
     
          <div className="items-data">
          
          <div className="productimg">
         <img src={img} alt="img" className='Proimg' /><br/>
         <button className='heart'><FaRegHeart/></button>
             <br/><br/>
             </div>

             <div className='pro_col_pric'>
              <h2>{title}</h2>
              <p className="color"><span>{description}</span><span className='price'>  <FaRupeeSign />{price}</span></p>
              
              <div className="incrdecrdiv">
              <i className="fas fa-plus" onClick={()=> increment(id)}></i>
              <input className='incrdecrinp' placeholder = {quantity} type="text" />
              <i className="fas fa-minus" onClick={()=> decrement(id)}></i>
              </div>
              </div>

              <div className="delete">
              <i className="fas fa-trash-alt " onClick={() => removeItem(id)} />
              <strong className='remove'>Remove</strong>
              </div>
              
              </div>
              
         
    </>
  )
}

export default Items



