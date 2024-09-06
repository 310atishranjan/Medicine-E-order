import React,{useState,useEffect} from 'react';
// import axios from "axios";
import Navbar from '../components/Navbar';
import '../css/About.css'
import Footer from '../components/Footer';
 function About() {
  const [aboutData,setaboutData]=useState([]);
  const fetchData=async()=>{
   
      await fetch("http://localhost:8000/api/u1/user/aboutData",{
          method:'GET',
          headers:{
              'Content-Type':'application/json'
          },
       
      }).then(async(res)=>{
          let response=await res.json();
        //   if(response[2].email===localStorage.getItem('useEmail'))
        //   {
        //     console.log(response[2]);
        //     setaboutData(response)
        //   }
        //   response.forEach((val)=>{
        //     if(val.email===localStorage.getItem('useEmail')){
        //     console.log(val);
        //     setaboutData(val);
        //     }
        //   })
          //second method using map useState change to array because it return array
          const em=localStorage.getItem('userEmail')
          const d=response.filter((val)=>{
            return (val.email===em)
          })
          // console.log(d);
          setaboutData(d);
      })
    //   const data=await axios.get("http://localhost:8000/api/u1/user/aboutData");
    //   console.log(data);
  }
  
  useEffect(()=>{
      fetchData();
  },[])
  
  return (
    <>
    <div>
        <Navbar/>
    </div>
    <div className="user">
    {/* <h2>Name:{aboutData.name}</h2>
    <h2>Email:{aboutData.email}</h2>
    <h2>Location:{aboutData.location}</h2>
    <h2>Phone No:{aboutData.phoneno}</h2>  */}

    {/* second approach using map */}
    {aboutData.map(item=>(
        <>
        <h2>Name:{item.name}</h2>
        <h2>Email:{item.email}</h2>
        <h2>Location:{item.location}</h2>
        <h2>Phone No:{item.phoneno}</h2>
        </> 
    ))
    }
    </div>
    <div>
        <Footer/>
    </div>
    </>
  )
}
export default About;