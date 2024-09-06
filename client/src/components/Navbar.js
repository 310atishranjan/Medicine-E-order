import React,{useState} from 'react'
import {Link,useNavigate} from "react-router-dom";
import '../css/Navbar.css';
// import '../input.css';
import CartModal from '../CartModal';
import Cart from '../pages/Cart';
export default function Navbar() {
  const [hb,setHb]=useState(true);
  const [cartView,setCartView]=useState(false);
  const nav=useNavigate();
  const handlelogout=()=>{
    localStorage.removeItem("authToken");
    nav("/")
  }
  return (
    <>
    <div className="containerNav" >
      <nav className={hb?"navbar":"active"}>
      <div className='navsecond'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li> {(localStorage.getItem("authToken"))?<Link to='/About'>About</Link>
          :""}</li>
          <li> {(localStorage.getItem("authToken"))?
          <Link to='/myOrder'>Myorder</Link>:""}</li>

          {/* <li> {(localStorage.getItem("authToken"))?
          <Link to='/Cart'>MyCart</Link>:""}</li> */}
        </ul>
        {(!localStorage.getItem("authToken"))?
          <div className="Rl">
          <button onClick={()=>{nav('/login')}} >Login</button>
          </div>
        :<>
        <div className="cart-logout">
          <div className="mycart"> <button onClick={()=>(setCartView(true))}>My Cart</button></div>
          {cartView? <CartModal onClose={()=>setCartView(false)}><Cart/></CartModal>:""}
        <div><button onClick={handlelogout} className="btnlog">Logout</button></div>
        </div>
       
        </>
        }
        </div>
      </nav>
      <div className="burger" id="bger" onClick={()=>setHb(!hb)}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
      </div>
      </div>
      </>
  )
}
