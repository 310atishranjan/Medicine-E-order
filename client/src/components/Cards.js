import React,{useState,useRef,useEffect} from 'react';
import {Link,Navigate,useNavigate} from 'react-router-dom';
import '../css/card.css';
import img from '../images/medi.jpg'
import {useCart,useDispatch} from './ContextReducer';
import Cart from '../pages/Cart';
export default function Cards(props) {
    const nav=useNavigate();
    const priceRef=useRef();
    let dispatch=useDispatch();
    let data=useCart();
    let options=props.option;
    let price=Object.keys(options);
    const [qty,setqty]= useState(1);
    const [mg,setmg]= useState("");
    let finalPrice=qty *parseInt(options[mg]);
    const addtocart = ()=>{
        if(localStorage.getItem("authToken")){
        window.confirm('Product shipped to cart for further purchase?');
        async function hello() {
            await dispatch({type:"ADD",name:props.mname,qty:qty,mg:mg,price:finalPrice,date:new Date().toString()})
            await console.log(data);
       }
       hello();
    }
    else{
        nav('/login')
    }
    }
    const purchase=async()=>{
        if(localStorage.getItem("authToken")){
            addtocart();
            nav('/Cart');
        }
        else{
            nav('/login')
        }
    }
    useEffect(()=>{
        setmg(priceRef.current.value);
    },[])
  return (
    <>
    <div className="main">
    <div class="card">
        {/* <img src={props.imge} alt="medi"></img> */}
        <img src={img} alt="medi"></img>
    <div class="container">
    <h4><b>{props.mname}</b></h4>
    {/* <p>{props.desc}</p> */}
    {/* <div>{props.imge}</div> */}
    <label class="text-red-300">Quantity</label>
    <select  onChange={(e)=>setqty(e.target.value)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
    </select>
        <br></br>
        <label>select mg</label>
        <select ref={priceRef} onChange={(e)=>setmg(e.target.value)}>
            {price.map((data)=>{
                return <option key={data} value={data}>{data}</option>
            })}
        </select>
        <div className="price">Price:{finalPrice}</div>
        <div><button className="btn-order" onClick={addtocart}>Add to Cart</button>
        <button className="btn-order" onClick={purchase}>OrderNow</button>
        </div>
    </div>
</div>
    </div> 
    </>
  )
}