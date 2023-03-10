import React from 'react'
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <section>
        <div className="container-contact">
          <div className="subcontainer-contact">
            <div className="phone-container">
              <div className="images">
                <i className="zmdi zmdi-phone"></i>

              </div>
              <div className="phonepara">
                Phone
                <div className="phoneNo">
                  8745398475
                </div>
              </div>
            </div>

            <div className="email-container">
              <div className="images">
                <i className="zmdi zmdi-email"></i>

              </div>
              <div className="emailpara">
                Email
                <div className="emailid">
                  abc@gmail.com
                </div>
              </div>

            </div>
            <div className="address-container">
              <div className="images">
                <i className="zmdi zmdi-gps-dot"></i>
              </div>
              <div className="addresspara">
                Address
                <div className="addressname">
                  MH, India
                </div>
              </div>
            </div>
          </div>
           <div className="details">
            <div className="subDetails">
              <h1>Get In Touch</h1>
              <div className="form-content">
                <div className="content">
                  <div className="forminput">
                    <input type="text" placeholder='YourName' autoComplete='off'/>
                  </div>
                  <div className="forminput">
                    <input type="email" placeholder='YourEmail' autoComplete='off' />

                  </div>
                  <div className="forminput">
                    <input type="number" placeholder='YourPhoneNo' autoComplete='off' />

                  </div>
                </div>
                <div className="message">
                  <textarea id="text" placeholder='Message'></textarea>
                </div>
                <div className="submit">
                  <input className='btn' type="submit" value="Submit"/>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

    </>
  )
}

export default Contact