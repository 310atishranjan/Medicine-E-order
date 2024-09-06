const usermodel=require('../models/usermodels');
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const jwtsecret="Aars";
const express=require("express");
const router=express.Router();
const {body,validationResult}=require('express-validator');
const registerControl= async(req,res)=>{
        try{
            const errors = validationResult(req);
            if (!errors.isEmpty())
            return res.status(422).json({errors: errors.array()});
        
        const existinguser=await usermodel.findOne({email:req.body.email});
        if(existinguser){
            return res.status(200).json({error:"Email already exist",success:false});
        }
            
        else{
            const password=req.body.password;
            const salt=await bcrypt.genSalt(10);
            const hashpassword=await bcrypt.hash(password,salt);
            req.body.password=hashpassword;

            const newuser=new usermodel(req.body);
            await newuser.save();
            /*usermodel.create({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                phoneno:req.body.phoneno,
                location:req.body.location,
            })*/
            res.status(201).json({success:true});
        }
        }catch(error){
            console.log(error);
            res.json({success:false});
        }
}
const loginControl= async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email||!password)
        {
            console.log("data not filled");
            return res.status(200).json({error:'data not filled'});
        }
        const user=await usermodel.findOne({email:email});
        if(user){
            const psword= await bcrypt.compare(password,user.password);
            if(!psword){
                return res.status(200).json({error:'data not filled'});
            }
            const data={
                users:{
                    id:user.id
                }
            }
            const authToken=jwt.sign(data,jwtsecret);
            console.log("user found");
            return res.status(201).json({success:true,authToken:authToken});  
    }
    else
    {
        console.log('data not found');
        return res.status(200).json({error:"data not found"});
    }
    }catch(error){
        console.log(error);
    }
}

module.exports={registerControl,loginControl};