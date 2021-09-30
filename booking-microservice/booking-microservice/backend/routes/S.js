const mongoose=require('mongoose');
mongoose.model("Flight",{
    
    starting:
    {
        type:String 

    },
    ending:
    {
        type:String
        
    },
    departure:
    {
        type:String 
        
    },
    type1:
    {
        type:String
        
    }
 });