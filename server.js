const express=require("express");
const app=express();

const dotenv=require('dotenv');
dotenv.config();

const connectdb=require("./config/db");
connectdb();


app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-with,Content-Type,Accept"
    );
    next();
})
const port=8000||process.env.PORT;

app.use(express.json());
app.use("/api/u1/user",require("./routes/Userroute"));
app.use("/api/u2/user",require("./routes/DisplayData"));
app.use("/api/u3/user",require("./routes/orderdata"));

app.listen(port,()=>{
    console.log("server is running ",port);
})