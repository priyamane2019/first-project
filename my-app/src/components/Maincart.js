import React from 'react'
import Items from './Items'
import "./Cart.css"
import { FaRupeeSign } from 'react-icons/fa'
import { BsBagPlusFill } from 'react-icons/bs'
import {useContext} from 'react'
import { CartContext } from "./Cart"



const Maincart = () => {
   
    const  { clearAll } = useContext(CartContext);
    const {item,  totalItem, totalAmount} = useContext(CartContext);
  return (
   <>
   <header>
   <div className="shopping-now">
    <img src="./images/arrow.png" alt="img"   className='arrow-icon'/>
   <h1> SHOP NOW</h1>

   <div className="cart-count">
       <p className='count'> {totalItem} </p>
       <img src="./images/cart.png" alt="img"  className='cart-icon'/>
    </div>
   
   </div>
   <hr/>
    </header>
    <section className='main-section'>
        <div className="itemsAdd">
            <div className='totalItem'>
        <h3>You have Added <span className='total-count'>{totalItem}</span> items in Cart <BsBagPlusFill/></h3>
        </div>
        <div className='TotalAmt'>
        <h3> Cart total : <span className='total-rs'><FaRupeeSign />{totalAmount}</span></h3>
        </div>
            <div className="clearAll">
                <button className='clear' onClick={clearAll}>Clear All</button>
            </div>
            {/* <div className="checkout">
                <button className="check">Checkout</button>
            </div> */}
        </div>
        <div className="cart-items">

         {
             item.map((product)=>{
                 return <Items key={product.id} {...product}/>
             })
         }
      
         
        </div>
    </section>
   </>
  )
}

export default Maincart