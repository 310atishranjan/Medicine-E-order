import React from 'react';
import { useState } from 'react';
import {Link,useNavigate} from "react-router-dom";
import  '../css/Register.css';
// import axios from 'axios';
function Register() {
   const nav=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneno:'',
    location:'',
    // Add more fields as needed
  });
  let name,value;
  const inputEvent = (e) => {
    name=e.target.name;
    value=e.target.value;

    setFormData({...formData,[name]:value});
  };
  const submit = async(e) => {
    e.preventDefault();
    const response=await fetch('http://localhost:8000/api/u1/user/register',{
      method:"POST",
      headers:{
        "Content-Type":'application/json'
      },
      body:JSON.stringify(formData),
    })
    const json=await response.json();
    console.log('Form json data:',json);
      if(!json.success)
      {
        alert('Enter valid data');
      }
      else
    nav('/login');
    // Perform any further actions like sending data to a server, etc.
  };
  return (
    <div className="container-register"> 
       <div className="sub-cont">
       <form onSubmit={submit}>
        <h2>Register Form</h2>
            <input type="text" placeholder='Enter your name' name="name" onChange={inputEvent} value={formData.name}></input>
            <input type="email" placeholder='Enter your email address' name="email" onChange={inputEvent} value={formData.email}></input>
            <input type="password" placeholder='create password' name="password" onChange={inputEvent} value={formData.password}></input>
            <input type="text" placeholder='Enter your mobileno' name="phoneno" onChange={inputEvent} value={formData.phoneno}></input>
            <input type="text" placeholder='Enter your Location' name="location" onChange={inputEvent} value={formData.location}></input>
            <button type="submit" className="btn">Register Now</button>
            <p><Link className="link1" to="/login"> Already an account ? </Link></p>
        </form>
       </div>
    </div>
  )
}

export default Register