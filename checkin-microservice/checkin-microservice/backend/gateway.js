const express=require('express');
const mongoose=require('mongoose');

const app=express();
const routes=require('./routes');
app.use(express.json());
var cors=require('cors');
app.use(cors());
app.use('/',routes) 
var usercontroler=require('./routes/index.js');
app.use('/user',usercontroler);

app.listen(4000,()=>{
    console.log("Gateway has started on port 4000");
}) 