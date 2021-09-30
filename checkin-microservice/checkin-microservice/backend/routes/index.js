const { application } = require('express');
const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');

//var flight=require('./S');
require("./S");
const Flight=mongoose.model("Flight");
 

const dbURI = 'mongodb+srv://pallavi:hello@test.93bcl.mongodb.net/checkin';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result)=>application.listen(1230))
  .catch((err) => console.log(err));
router.post('/user/:Number',(req,res)=>
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
        Number:req.params.Number,
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


router.post("/user",async (req,res)=>
{
    console.log("Hii");
    console.log(req.body);
    var userData=req.body;
    var user=await Flight.findOne({Number:userData.num});
    console.log(user);
    console.log(userData.num);
    if(user)
    {
        if(user.Number==userData.num)
        {
            res.status(200).send({"message":"Success"});
        }
        else 
        {
            res.status(401).send({"message":"Failed"});
        }
    }
    else
    {
        res.status(401).send({"message":"Failed"});
    }
    
})

module.exports=router