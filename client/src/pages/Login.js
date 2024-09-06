import React from 'react';
import { Link,useNavigate} from 'react-router-dom';
import '../css/login.css'
import {useState} from 'react';
const Login = () => {
  const nav=useNavigate();
  const [loginData, setloginData] = useState({
    email: '',
    password: '',
  });
  // const [email, setemail] = useState();
  // const [password,setpassword]=useState();
  console.log(loginData);
  let name,value;
  const inputEvent = (e) => {
    name=e.target.name;
    value=e.target.value;

    setloginData({...loginData,[name]:value});
  };
  const loginuser = async(e) => {
    e.preventDefault();
    const response=await fetch('http://localhost:8000/api/u1/user/login',{
      method:"POST",
      headers:{
        "Content-Type":'application/json'
      },
      body:JSON.stringify(loginData),
  })
  const json=await response.json();
  console.log('Form json data:',json);
    if(!json.success)
    {
      nav('/register');
    }
    else
    {
      localStorage.setItem("userEmail",loginData.email);
      localStorage.setItem("authToken",json.authToken);
      nav('/');
    }
   
  // Perform any further actions like sending data to a server, etc.
};
  return (
    <div className="container-login">
       <div className="sub-cont1">
       <form onSubmit={loginuser}>
        <h2>Login Form</h2>
            <input type="email" placeholder='Enter your email address' name="email" value={loginData.email} onChange={inputEvent}></input>
            <input type="password" placeholder='Enter your password' name="password" value={loginData.password} onChange={inputEvent}></input>
            <button type="submit" className="btn">Login</button>
            <p ><Link className="link1" to="/Register">Create an account !</Link></p>
            </form>
       </div>
    </div>
  )
}

export default Login;