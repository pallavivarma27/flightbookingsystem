var mongoose=require('mongoose');

module.exports=mongoose.model("User",
{
    email:
    {
        type:String
    },
    pwd:
    {
        type:String
    }
});
