import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';
import path from 'path';




import cookieParser from 'cookie-parser';

dotenv.config();
mongoose.connect( "mongodb+srv://pratyush:%40%23BlogappMern@mern-blog.vydkktx.mongodb.net")
.then(()=>{
    console.log("Mongodb is connect")
})
.catch((err)=>{
    console.log(err)
})

const __dirname = path.resolve();


const app =express();
app.use(express.json());
app.use(cookieParser());


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);


app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});




//this is the middleware for error message
app.use((err,req,res,next)=>{
    const statusCode =err.statusCode || 500;
    const message =err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    })
})