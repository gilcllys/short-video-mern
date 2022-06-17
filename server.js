import express from "express";
import mongoose from "mongoose";
import Cors from 'cors'
import Videos from './dbModel.js'

//App Config

const app = express()
const port = process.env.PORT || 9000
const URL_MONGODB = "mongodb+srv://admin:admin@cluster0.lg4ytyx.mongodb.net/?retryWrites=true&w=majority"

//Middleware
app.use(express.json())
app.use(Cors())

//DB Config
mongoose.connect(URL_MONGODB)

//API Endpoints
app.get('/',(req,res) => res.status(200).send("Servidor funcionando"))

app.post('/v2/posts',(req, res)=>{
    const dbVideos = req.body
    Videos.create(dbVideos, (err, data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

app.get('/v2/posts',(req, res)=>{
    Videos.find((err, data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

//Listener
app.listen(port, ()=> console.log(`Escutando o localHost na porta: ${port}`))
