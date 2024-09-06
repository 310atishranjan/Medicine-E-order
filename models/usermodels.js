const mongoose =require('mongoose');

const userSchema=new mongoose.Schema({
        name:{
            type:String,
            required:[true,'name is required']
        },
        email:{
            type:String,
            required:[true,'email is required']
        },
        password:{
            type:String,
            required:[true,'password is required']
        },
        phoneno:{
            type:String,
            required:[true,'mobileno is required']
        },
        location:{
            type:String,
            required:true,
        },
        date:{
            type:Date,
            default:Date.now(),
        }
})
const usermodel=mongoose.model('users',userSchema);
module.exports=usermodel;