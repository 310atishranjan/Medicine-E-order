const express=require("express");
const router=express.Router();

router.post('/sendData',(req,res)=>{
    try{
        console.log(global.mediData);
        res.send(global.mediData)
    }catch(error){
        console.log(error.message);
    }
})
module.exports=router;