// import ditenv
 require('dotenv').config()

// import express

const express = require('express')
// import cors
const cors = require('cors')
// import router 
const router = require('./router')
           
// import connect
require('./connection') 
 
// create server
const pfServer = express()
// server using cors
pfServer.use(cors())

// parse the data    
pfServer.use(express.json())
 
// use router
pfServer.use(router)

// exporting uploade server
pfServer.use ('/upload',express.static('./uploads'))

// port
const PORT = 4000 || process.env.PORT   
 
// Listen
pfServer.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);
      
}) 

// get
//    pfServer.get('/',(req, res)=>{
//    res.send('get reqreceived') 
// })

// pfServer.post('/',(req, res)=>{
//     res.send('post request  recevied') 

// // pfServer.put('/',(req,res)=>{
// //     res.send('post request  recevied') 

// // pfServer.delete('/',(req,res)=>{
// //     res.send('post request  recevied') 
// })