import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRouter from './routes/auth.js';
import usersRouter from './routes/users.js';
import hotelsRouter from './routes/hotels.js';
import roomsRouter from './routes/rooms.js';
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config()

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO)
    }catch(error){
        throw error
    }
    
}



mongoose.connection.on("disconnected", ()=>{
    console.log("mongoose disconnected")
})
mongoose.connection.on("connected", ()=>{
    console.log("mongoose connected")
})

app.use(cookieParser())
app.use(express.json())

// app.use((req,res,next)=>{
//     console.log("REquest received")
//     next();
// })


app.get("/", (req, res, next)=>{
    // console.log(req)
    res.send("Hello world")
})

app.use("/api/auth", authRouter)
app.use("/api/users", usersRouter)
app.use("/api/rooms", roomsRouter)
// app.use("/api/rooms", (req,res,next)=>{
//     console.log("testing")
// })
app.use("/api/hotels", hotelsRouter)

app.use((error, req, res, next)=>{
    res.status(error.status).json(error.message)
}
)

app.listen(8080, ()=>{
    connect()
    console.log("Listing on PORT 8080")
})