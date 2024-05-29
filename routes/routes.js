const express=require('express');
const router=require('express').Router();
const signinTemplatecopy=require('../models/Signinmodel');
const signupTemplatecopy=require('../models/Signupmodel');
const adminTemplatecopy=require('../models/Adminmodel');
const bookingTemplatecopy=require('../models/Bookingmodel');
const uploadTemplatecopy=require('../models/Uploadmodel')


router.post("/admin",(req,res)=>
{
    const b=new adminTemplatecopy(
        {
           username:req.body.username,
           password:req.body.password
        })

b.save().then(data=>{
    res.json(data);
}).catch(error=>{
    res.json(error)
})
})


router.post("/signin",(req,res)=>
{
    const c=new signinTemplatecopy(
        {
           email:req.body.email,
           password:req.body.password
        })

c.save().then(data=>{
    res.json(data);
}).catch(error=>{
    res.json(error)
})
})


router.post("/signup",(req,res)=>
{
    const d=new signupTemplatecopy(
        {
           name:req.body.name, 
           email:req.body.email,
           phone:req.body.phone,
           password:req.body.password
        })

d.save().then(data=>{
    res.json(data);
}).catch(error=>{
    res.json(error)
})
})


router.post("/booking",(req,res)=>
{
    const k=new bookingTemplatecopy(
        {
           ticketid:req.body.ticketid, 
           name:req.body.name,
           phone:req.body.phone,
           date:req.body.date,
           time:req.body.time,
           ticket:req.body.ticket
        })

k.save().then(data=>{
    res.json(data);
}).catch(error=>{
    res.json(error)
})
})

  
router.post("/upload",(req,res)=>
{
    const s=new uploadTemplatecopy(
        {
           
           moviename:req.body.moviename,
           cost:req.body.cost,
           start:req.body.start,
           out:req.body.out
        })

s.save().then(data=>{
    res.json(data);
}).catch(error=>{
    res.json(error)
})
})


router.delete("/delete/:ticketid",async(req,res)=>{
    try{
        const {ticketid}=req.body
        const ticket=await bookingTemplatecopy.findOneAndDelete({ticketid})
        if(!ticket){
            return res.status(404).json({message:'Ticket not found'})
        }
        res.status(200).json({ message: 'Ticket cancelled successfully' });
            } catch (error) {
              console.error(error);
              res.status(500).json({ message: 'Server error' });
    }
})

module.exports=router;