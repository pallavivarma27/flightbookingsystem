var app=require('express');
var application=app();
var cors=require('cors');
var jwt=require('jwt-simple');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var User=require('./models/User.js');
application.use(cors());
application.use(bodyParser.json());


application.post('/register',async(req,res)=>
{ 
    //console.log(req.body);
    var userData=req.body;
    var user1=await User.findOne({email:userData.email});
    //console.log(user1);
    if(!user1)
    {
        var user=new User(userData);
        user.save((error,result)=>
        {
            if(error)
                console.log("userdata=",userData);
            console.log('Saved Data Successfully');
            //res.sendStatus(200);

        })
        var paytoken={};
            var token=jwt.encode(paytoken,'123'); 
            res.status(200).send({token});
        
    }   
    else
    {
        res.status(403).json({error:'Email already in use'});
    }
});



application.post('/login',async (req,res)=>
{ 
    
    var userData=req.body;
    
    var user=await User.findOne({email:userData.email});

    console.log(user);
    if(!user || userData.pwd!=user.pwd)
    {
        res.status(401).send({message:'Email or password Invalid'});
    }   
    else
    {
            var paytoken={};
            var token=jwt.encode(paytoken,'123');
            res.status(200).send({token});
    }
        
});
 

const dbURI = 'mongodb+srv://pallavi:hello@test.93bcl.mongodb.net/user';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => application.listen(1220))
  .catch((err) => console.log(err));
//application.listen(1220);

module.exports=application;