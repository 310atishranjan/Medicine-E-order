import React from 'react'
import {useCart,useDispatch} from '../components/ContextReducer';
export default function Cart() {
    let data=useCart();
    let dispatch=useDispatch();
    if(data.length===0)
    return (
        <div>
            <div>The Cart is Empty</div>
        </div>
    )
    const handleCheckout=async()=>{
        let userEmail=localStorage.getItem("userEmail");
        console.log(userEmail);
        let response=await fetch("http://localhost:8000/api/u3/user/orderData",{
            method:"POST",
            headers:{
                "Content-Type":'application/json'
              },
              body:JSON.stringify({
                email:userEmail,
                order_data:data,
                order_date:new Date().toDateString()
              })
        });
        if(response.status===201)
        {
            dispatch({type:"DROP"})
        }
    }
    let totalprice=data.reduce((total,medi)=>total+medi.price,0);//reduce contains accumulator and initial values
  return (
    <>
    <div className="content">
        <table>
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
            {data.map((medi,index)=>(
                <tr>
                    <th scope='row'>{index+1}</th>
                    <td>{medi.name}</td>
                    <td>{medi.qty}</td>
                    <td>{medi.mg}</td>
                    <td>{medi.price}</td>
                    <td>{medi.date}</td>
                    <td><button type="button" onClick={()=>{dispatch({type:"Remove",index:index})}}>X</button></td>
                </tr>
            ))}
            </tbody>
        </table>
        <div>TotalPrice:{totalprice}/-</div>
        <div>
            <button onClick={handleCheckout}>Order</button>
        </div>
    </div>
    </>
  )
}
