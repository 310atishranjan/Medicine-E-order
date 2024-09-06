const mongoose=require("mongoose");
const connectdb= async()=>{
await mongoose.connect("mongodb://127.0.0.1:27017/MedicinerOrder",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true,
}).then(()=>{
    
    const fetchdata=mongoose.connection.db.collection("mediData");
    fetchdata.find({}).toArray(function(err,data){
    if(err){
        console.log(err);
    }else{
        global.mediData=data;
        // console.log(global.mediData);
    }
    })
    console.log(`connected`);
}).catch((e)=>{
    console.log(e);
    console.log(`no connection`)
});
}
/*const connectdb=async()=>{
    try{
        // await mongoose.connect(process.env.MONGODB_URL);
        await mongoose.connect("mongodb+srv://Aars:VIOUfyWNiJjE6eXc@cluster0.au38vbn.mongodb.net/Medicine-Order");
        console.log("server connect with database");
    }catch(error){
        console.log(error);
    }
}*/
module.exports =connectdb;