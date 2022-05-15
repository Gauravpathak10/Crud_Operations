import express from "express";
import cors from 'cors'
import bodyParser from "body-parser";
import mongoose from 'mongoose'
import router from "./Routes/BlogRoute";
const app = express()


app.use(cors())
app.use(bodyParser.json())
app.use('/', router)


mongoose.connect('mongodb://localhost:27017/IIDE-Blog')
    .then(() => {
        console.log('connected db')
    })
    .catch(() => {
        console.log('Not connected ')
    })



app.listen(4000, () => {
    console.log('App Running 4000')
})