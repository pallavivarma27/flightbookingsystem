const { application } = require('express');
const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');

//var flight=require('./S');
require("./S");
const Flight=mongoose.model("Flight");
 

const dbURI = 'mongodb+srv://pallavi:hello@test.93bcl.mongodb.net/booking';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result)=>application.listen(1110))
  .catch((err) => console.log(err));
router.post('/user/:starting/:ending/:departure/:type1',(req,res)=>
{
    /*console.log(req.params.Flight_id);
    console.log(req.params.starting);
    console.log(req.params.ending);
    console.log(req.params.departure);
    console.log(req.params.return1);
    console.log(req.params.type1);*/
    var bookingdata=
    {
        //Flight_id:req.params.Flight_id,
        starting:req.params.starting,
        ending:req.params.ending,
        departure:req.params.departure,
        //return1:req.params.return1,
        type1:req.params.type1
    }
    var flight=new Flight(bookingdata);
    flight.save().then(()=>
    {
        console.log("New Flight details Entered");
    }).catch((err) => {
        if(err)
        {
            throw err; 
        }
    })
    res.send("New Flight derails created");
});

module.exports=router