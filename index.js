const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');
const {MONGOURI} = require('./keys');
require('./models/user');
//middleware to convert into json data
app.use(express.json());
//using auth.js as a middleware
app.use(require('./routes/auth'));

mongoose.connect(MONGOURI);

mongoose.connection.on('connected', ()=>{
    console.log("Connected to MongoDB !!");
})
mongoose.connection.on('error', (err)=>{
    console.log("error in connecting MongoDB", err);
    
})
//Listen to port 
app.listen(PORT, ()=>{
    console.log("Server is running on port :" , PORT);
})