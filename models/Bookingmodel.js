const mongoose=require('mongoose');
const bookingTemplate=new mongoose.Schema(
{
    ticketid:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
       
    },
    ticket:{
        type:String,
        required:true
    }

})

module.exports=mongoose.model('bookingdetails',bookingTemplate)