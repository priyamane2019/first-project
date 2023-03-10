import React from 'react'
//import { Outlet } from 'react-router-dom'
import "./Home.css"
//import Header from './Header'
import style1 from "../images/homestyle1.gif";
import style2 from "../images/homestyle4.webp";
import style3 from "../images/homestyle6.gif";
import style4 from "../images/homestyle5.gif";
import style5 from "../images/homestyle7.gif";
import style6 from "../images/homestyle2.webp";
import style7 from "../images/homestyle8.gif";
import style8 from "../images/homestyle10.gif";




const Home = () => {
  return (
    <>
      <section>
        <div className="container-home">
            <div className="content-home">
           <marquee> <h1 className='head1'> Get 50% INSTANT DISCOUNT</h1></marquee>
              <div className="row1">
                <img src={style1} alt="img" />
                <marquee direction="up"><h1 className='head2'>Hurry Up! Shop Now</h1></marquee>
                <img src={style2} alt="img" />

                </div>
                <marquee direction="right">
                <div className="add">
                <h1><i className="zmdi zmdi-account"></i>  INVITE YOUR FRIENDS</h1>
                <p>& Earn Up to RS1500 in your Shopping wallet</p>
                </div>
                </marquee>
                
            <div className="row2">
              <img className='imgr1' src={style3} alt="img" />
              <img className='imgr2' src={style7} alt="img" />
              <img className='imgr3' src={style8} alt="img" />
              </div>

              <div className="row3">
              <img className='imgr4' src={style6} alt="img" />
              <img className='imgr5' src={style4} alt="img" />
                <img src={style5} alt="img" />
              
              </div>
            </div>
        </div>
      </section>
   
    </>
  )
}

export default Home


