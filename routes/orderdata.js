const express=require("express");
const router=express.Router()
const order=require('../models/order');
router.post('/orderData',async(req,res)=>{
    let data=req.body.order_data;
    // await data.splice(0,0,{Order_date:req.body.order_date});
    let emailid=await order.findOne({'email':req.body.email});
    
    if(emailid===null){
        try{
            await order.create({
                email:req.body.email,
                order_data:[data],
                order_date:req.body.order_date,
            }).then(()=>{
                res.status(201).json({success:true});
            })
        }catch(error){
            console.log(error);
            res.send("server error 1")
        }
    }
    else{
        try{
            await order.findOneAndUpdate({email:req.body.email},
                {$push:{order_data:data}}).then(()=>{
                    res.status(201).json({success:true});
                })

                }catch(error){
                    res.send("server Error second")
            }
        } 
})
router.post('/myorderData',async(req,res)=>{
    try{
        let myData=await order.findOne({'email':req.body.email})
        res.json({order_data:myData})
    }catch(error){
        res.send("serverError");
    }
})
module.exports=router;