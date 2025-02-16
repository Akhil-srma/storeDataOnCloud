import express from "express";
import mongoose from"mongoose";
import router from "./router/singupRouter.js";
import path from "path";
import dotenv from"dotenv";
import cors from 'cors';
const app=express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(path.resolve(),'public')));
app.use(express.json());
app.use("/api",router);
app.use(cors({
    origin: 'http://127.0.0.1:5500/view/index.html'
    }));


dotenv.config();

mongoose
.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("Connected");
}).catch((err)=>{
    console.log("Connection err"+err);
})

app.listen(3000,()=>{
    console.log(`http://localhost:3000`)
})