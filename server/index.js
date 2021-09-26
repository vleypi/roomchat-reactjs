const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const mongoose = require('mongoose')
const config = require('config')
const PORT = config.get('port') || 5000

app.use(express.json({
    extended: true
}))

const start = async () =>{
    try{
        await mongoose.connect(config.get('mongoUrl'),{ useNewUrlParser: true, useUnifiedTopology: true })
        server.listen(PORT,()=>console.log(PORT))
    }
    catch(err){
        console.log(err.message)
    }
}

start();