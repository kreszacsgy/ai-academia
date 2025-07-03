import React from "react"
import Back from "../common/Back/Back"
import "./Contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.98604069101!2d19.03266027570783!3d47.5096630711811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc1c8900cf6b%3A0xbe465135b462a93b!2sBudapest%2C%20Kacsa%20u.%2022%2C%201027!5e0!3m2!1shu!2shu!4v1751009228888!5m2!1shu!2shu" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"'
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>1027 Budapest, Kacsa Street 22.</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> info@aiacademia.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> + 1235 2355 98</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <div className="social">
                        <i className="fab fa-facebook-f icon"></i>
                        <i className="fab fa-instagram icon"></i>
                        <i className="fab fa-twitter icon"></i>
                        <i className="fab fa-youtube icon"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact