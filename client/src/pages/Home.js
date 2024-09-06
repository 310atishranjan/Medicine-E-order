import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import BotHelp from '../components/BotHelp';
import '../css/Home.css'
 function Home() {
    const [mediname,setmediname]=useState([]);
    // const [item,setitem]=useState([]);

    const loadData=async()=>{
      let res=await fetch("http://localhost:8000/api/u2/user/sendData",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          }
      });
      res=await res.json();
      // console.log(res);
      setmediname(res);
    }
    useEffect(()=>{
      loadData();
    },[])
  return (
    <>
    <div className="top">
    {/* <div><BotHelp/></div> */}
    <div><Navbar></Navbar></div>
    {/* <div><Cards name={mediname}/></div> */}
    
    <div className="parent">
      {
        mediname != [] ? mediname.map((data)=>{
          return (
            <div key={data._id} className="card-pos">
              <Cards mname={data.medi_name} desc={data.Desc} imge={data.img} option={data.options[0]}/>
            </div>
          )
        })
        :""
      }
      </div>
     
    <div><Footer/></div>
    </div>
    </>
  )
}
export default Home;