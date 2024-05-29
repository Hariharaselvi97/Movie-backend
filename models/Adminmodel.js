const mongoose=require('mongoose');
const adminTemplate=new mongoose.Schema(
{
     username:{
        type:String,
        required:true
     },
     password:{
        type:String,
        required:true
     }
})

module.exports=mongoose.model('admindetails',adminTemplate)