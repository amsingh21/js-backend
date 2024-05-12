

//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";


dotenv.config({
    path:'.env'
})
connectDB() .then( ()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port :${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!!", err);
})





// first approach to connect to DB 


/*
import e from "express";


const app = e();

//through iffe
(async( ) => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/ ${DB_NAME}`)
        app.on( "error",()=>{
            console.log("ERROR" ,error);
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port
             ${process.env.PORT}`);
        })


    } catch (error) {
        console.log(error);
        throw error
    }
}) */