import dotenv from 'dotenv'
import express from 'express'
import connectDB from './db/index.js';
import {app} from './app.js'
dotenv.config({
    path: './env'
})
connectDB().then(()=>{
    app.listen((process.env.PORT) || 8000,()=>{
        console.log(`Server is running at port: ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log('MONGODB db Connection failed', error);
})