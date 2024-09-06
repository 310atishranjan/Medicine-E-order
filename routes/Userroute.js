const express=require('express');
const router=express.Router();
const users=require('../models/usermodels');
const {registerControl,loginControl,aboutData}=require('../controller/usercontroller');
const {body,validationResult}=require('express-validator');
//login and post
/*router.post('/register',async(req,res)=>{
        try{
            users.create({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                phoneno:req.body.phoneno,
                location:req.body.location,
            })
            res.json({success:true})
        }catch(error){
            console.log(error);
            res.json({success:false});
        }
})*/

/*router.post('/register',
[
    body('email').isEmail(),
    body('name').isLength({min:5}),
    body('password').isLength({min:5})
],registerControl);*/
router.post('/register',registerControl);
router.post('/login',loginControl);
router.get('/aboutData',(req,res)=>{
    users.find((error,data)=>{
        if(error)
        {
            res.status(200).send(error);
        }
        else{
            res.status(201).send(data);
        }
    });
    
});

module.exports=router;