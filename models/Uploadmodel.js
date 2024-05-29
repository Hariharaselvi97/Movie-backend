const mongoose=require('mongoose');
const uploadTemplate=new mongoose.Schema(
{
   
    moviename:{
        type:String,
        required:true
    },
    cost:{
        type:String,
        required:true
    },
    start:{
        type:String,
        required:true
    },
    out:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('uploadmovies',uploadTemplate)