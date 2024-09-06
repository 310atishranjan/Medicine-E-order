import React,{useEffect,useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../css/Myorder.css'
export default function MyOrder() {
    const [orderData,setorderData]=useState([]);
    const fetchData=async()=>{
        await fetch("http://localhost:8000/api/u3/user/myorderData",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:localStorage.getItem('userEmail')
            })
        }).then(async(res)=>{
            let response=await res.json()
            console.log(response);
           
            // console.log(response.order_data.email);
            /*const d=response.order_data.order_data;
            d.forEach((item)=>{
                console.log(item);
                setorderData(item)
            })*/
            if(response.order_data)
            setorderData(response.order_data.order_data);
        })
    }
    useEffect(()=>{
        fetchData()
    },[])
    
  return (
    <>
    <div>
    <div className='Nav'><Navbar/></div>
    {/* <div>
        <h2>{orderData[0].name}</h2>
        <h2>{orderData[0].mg}</h2>
        <h2>{orderData[0].qty}</h2>
        <h2>{orderData[0].price}</h2>
    </div> */}
    {
        /*orderData.map(item=>(
            <>
            <h2>{item.name}</h2>
            <h2>{item.mg}</h2>
            <h2>{item.qty}</h2>
            <h2>{item.price}</h2>
            </>
        ))*/
        /*<table>
        <thead>
            <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>MG</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
        {orderData.map((item,index)=>(
            <tr>
                <th scope='row'>{index+1}</th>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.mg}</td>
                <td>{item.price}</td>
            </tr>
           
        ))}
        
         <h3>totalprice:{totalprice}</h3>
        </tbody>
    </table>*/}
    <div className="table">
    <table>
        <thead>
            <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>MG</th>
                <th>Amount</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            {
                
                orderData.slice(0).reverse().map((item,index)=>(
                item.map((i,ind)=>( 
                    <tr>
                <th scope='row'>{index+1}</th>
                <td>{i.name}</td>
                <td>{i.qty}</td>
                <td>{i.mg}</td>
                <td>{i.price}</td>
                <td>{i.date}</td>
                </tr>
                ))
            ))
        }
        </tbody>
    </table>   
    </div>

    <div className='down'><Footer/></div>
    </div>
    </>
  )
}
