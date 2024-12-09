// import mongoos
const mongoose = require('mongoose')
            
connectionstring = process.env.DATABASE

mongoose.connect(connectionstring).then(()=>{
    console.log('mongodb connected successfully') ;
    
}).catch((err)=>{
    console.log(`mongodb connection failed due to ${err}`); 
    
})  

//import mongoose
// const mongoose = require('mongoose')
 
// connectionstring = process.env.DATABASE

// mongoose.connect(connectionstring).then(()=>{
//     console.log("MonogoDB connnected sucessfully");
    
// }).catch((err)=>{
//     console.log(`MongoDB connection failed due to ${err}`);

// })
  