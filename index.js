import express from "express";
import 'dotenv/config'
import movieRouter from "./Movie/movie.router.js";
import cors from 'cors';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

app.get('/',(req, res)=>{
    return res.status(200).json('Welcome to metavercity assignment');
})

app.use('/movies', movieRouter);
export default app;