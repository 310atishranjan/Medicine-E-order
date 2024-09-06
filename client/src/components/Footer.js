import React from 'react'
import '../css/Footer.css'
import emailjs from 'emailjs-com'
import img from '../images/fb.png'
import img1 from '../images/twitter.png'
import img2 from '../images/insta.jpg'
export default function Footer() {

  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_lwvpztg','template_9u3o6i9',e.target,'ANIR0B2x1WchsHeyo').then(res=>{
      console.log(res);
    }).catch(error=>
      console.log(error)
    )
    e.target.reset();
  }
  return (
    <>
    <footer className="footer">
    <div className="container-query">
      <div className="footer-content">
      <div className="section">
        
        <ul className="ul">
        <h3>Our Policies</h3>
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
          <li>Return Policy</li>
          <li>Disclaimer</li>
        </ul>
      </div>
      <div className="section">
        
        <ul className="ul">
        <h3>Our Services</h3>
          <li>Order Medicines</li>
          <li>Consult a doctor</li>
          <li>Book Lab Test</li>
          <li>Online Prescription</li>
        </ul>
      </div>
        <div className="section">
          <ul className="ul">
          <h3 className="contact">Contact Us</h3>
          <li>Any query: 555555</li>
          <li>Contact: info@example.com</li>
          <li>Address Details: Khiri Dayal Nabinagar Aurangabad Bihar
              Bharat
          </li>
          </ul>
        </div>
      
      <div className="section">
        <div className="form">
       <form onSubmit={sendEmail}>
        <ul className="ul">
        <h3> Send Query</h3>
        <li>
            <input type="text" placeholder='Enter your name' name="name"/></li>
            <li><input type="email" placeholder='Enter your email' name="email"/></li>
            <li><textarea placeholder='Write query' name="message"></textarea></li>
            <li><button type="submit" className="btn5">Send</button></li>
            </ul>
        </form>
        </div>
        </div>
    </div>
    </div>
      <div className="bottom-footer">
        <p>&copy; 2023 Your Website All right Reserved </p>
        </div>
      </footer>
    </>
  )
}
