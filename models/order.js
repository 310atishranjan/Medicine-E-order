const mongoose =require('mongoose');

const orderSchema=new mongoose.Schema({
        email:{
            type:String,
            unique:true
        },
        order_data:{
            type:Array,
            required:true,
        },
       order_date:{
        type:String,
       }
})
const ordermodel=mongoose.model('orders',orderSchema);
module.exports=ordermodel;