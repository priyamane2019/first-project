import React from 'react'
import {NavLink} from "react-router-dom";
import cartimg from "../images/logo.jpeg"


const Header = () => {
  return <>
   <header>
     <div className="container-header">
   <nav>
   <div className="navv">
   <img src={cartimg} className="cartimg" alt="img" />
   <span className='spp'>SHOP NOW</span>
   </div>
        <ul className="ull">
          {/* <span className='sp'><i className="zmdi zmdi-shopping-cart"></i>SHOP NOW</span> */}
          <li><NavLink style = {{textDecoration: 'none'}} to="/">Home</NavLink></li>
          <li><NavLink style = {{textDecoration: 'none'}} to="/register">Register</NavLink></li>
          <li><NavLink style = {{textDecoration: 'none'}} to="/login">Login</NavLink></li>
          <li><NavLink style = {{textDecoration: 'none'}} to="/cart">Products</NavLink></li>
          <li><NavLink style = {{textDecoration: 'none'}} to="/about">AboutUs</NavLink></li>
          <li><NavLink style = {{textDecoration: 'none'}} to="/contact">ContactUs</NavLink></li>

        </ul>
  </nav>
  
  
  
  </div>
</header>

</>
}

export default Header