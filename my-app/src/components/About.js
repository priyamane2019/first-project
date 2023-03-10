import React from 'react'
import './About.css';
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import aboutshop2 from "../images/aboutshop2.jpeg";
import aboutshop from "../images/aboutshop.jpeg"
import aboutshop1 from "../images/aboutshop1.jpeg"
import aboutshop3 from "../images/aboutshop3.jpeg"
//import { Navigate } from 'react-router-dom';
const About = () => {
  const navigate = useNavigate();
  const callAboutPage = async () =>{
  try{
      const res = await fetch('/about',{
        method:"GET",
        headers:{

          Accept:"apllication/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
 const data = await res.json();
 console.log(data);
 if(!res.status === 200)
 {
   const error = new Error(res.error);
   throw error;
 }
 
  }catch(err)
  {
    console.log(err);
    navigate("/login");
  }
  }
  useEffect(()=>{
      callAboutPage();
  }, []);
  
  return(
  <>
  <section>
  <form method="GET">
    <div  className="container-about">
      
      <h1 className='head'>ABOUT US</h1>
      <div className="subcontainer-about">
      <div className="image1">
     <img src={aboutshop2} alt="img" />
      </div>
      <div className="para">
        <h1>ONLINE SHOPPING</h1><br/><br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatum ut animi ipsum eligendi labore facere autem tempora, non corrupti aspernatur accusamus praesentium officia ab distinctio blanditiis pariatur temporibus cumque nostrum. Quos fugiat enim voluptates officiis reiciendis eveniet voluptate unde? Alias necessitatibus corporis exercitationem consequatur quia optio voluptas, consequuntur odio!
      </div>
      </div>
      <div className="subcontainer-about2">
        <div className="para2">
          <h1>ONLINE SHOPPING PROCESS</h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis exercitationem dicta deserunt dolorem veniam! Optio doloribus iusto vero dolorum quidem assumenda ullam et, doloremque tenetur? Quod deserunt sed accusamus libero, dignissimos aspernatur est vero, numquam dolores amet eaque aliquid neque commodi! Repudiandae quas vitae necessitatibus pariatur vero quod aliquid rem!
        </div>
      <div className="img2">
              <img src={aboutshop} alt="img" />
            </div>
      </div>
      <div className="subcontainer-about3">
        <div className="para3">
          <h1>ONLINE SHOPPING FEATURES</h1>
          <img className='img33' src={aboutshop1} alt="img" />
        </div>
        <div className="para3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est officia quos exercitationem consequuntur labore debitis voluptates facere ipsam ducimus voluptate esse officiis possimus libero, laboriosam corporis sequi vel ratione soluta. Labore illum placeat earum sunt. Tempora a, sint, unde deserunt pariatur animi quaerat officia, velit esse qui inventore perferendis? Veritatis quibusdam libero porro laborum dolore recusandae ipsam pariatur, illum unde explicabo ullam beatae rem harum non eveniet optio, nam dolor odit deleniti tempore exercitationem? Commodi non eligendi odit. Inventore aperiam omnis nemo labore enim. Illum suscipit nostrum sed omnis consectetur? Fuga aliquam tempore tempora cum reiciendis autem numquam quae quibusdam.
        </div>
            </div>
            <div className="subcontainer-about4">
        <div className="para3">
          <img src={aboutshop3} alt="img" />
        </div>
        <div className="para3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est officia quos exercitationem consequuntur labore debitis voluptates facere ipsam ducimus voluptate esse officiis possimus libero, laboriosam corporis sequi vel ratione soluta. Labore illum placeat earum sunt. Tempora a, sint, unde deserunt pariatur animi quaerat officia, velit esse qui inventore perferendis? Veritatis quibusdam libero porro laborum dolore recusandae ipsam pariatur, illum unde explicabo ullam beatae rem harum non eveniet optio, nam dolor odit deleniti tempore exercitationem? Commodi non eligendi odit. Inventore aperiam omnis nemo labore enim. Illum suscipit nostrum sed omnis consectetur? Fuga aliquam tempore tempora cum reiciendis autem numquam quae quibusdam.
        </div>
      

            </div>
            </div>
            </form>
      
     
    
  </section>

  </>
  )
}

export default About