import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import bookRoute from './route/bookroute.js';
import userroute from './route/user.js'
import cors from 'cors'
const app =express();
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

dotenv.config()
const PORT = process.env.PORT || 3000;
const URI =process.env.MongodbURI ;
// connect to mongodb


try{
    mongoose.connect(URI,
        console.log('mongodb is connected')
    )
}catch(err){
     console.log(err,'error')
}


app.get('/',(req,res)=>{
res.send("hii karan")
})


// defining route

app.use("/book",bookRoute)
app.use('/user',userroute)
app.listen(PORT,()=>{
    console.log(`Example app listening on ${PORT}`)
})