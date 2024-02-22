import express from 'express';
import cookieParser from 'cookie-parser';
// import cors from 'cors';
import dotenv from 'dotenv';

import connect from './config/db.js'
import routes from './routes/index.js'

const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config();

// app.use(cors({ 
//     origin: 'http://localhost:5173', 
//     credentials: true,
//     methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization']
// }));

app.use("/", routes)

const port = process.env.PORT || 4000
app.listen(port, ()=>{
    connect()
    console.log(`server is runing on port ${port}`)
})