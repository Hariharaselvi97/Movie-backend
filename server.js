const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const routesurl=require('./routes/routes');


if(mongoose.connect('mongodb+srv://hariharaselvi:Haritha!97@cluster0.629sk7b.mongodb.net/movie-db?retryWrites=true&w=majority&appName=Cluster0'))
{
    console.log('Database is connected');
}

app.use(express.json());
app.use(cors());
app.use("/",routesurl);



app.listen(5000,()=>{
    console.log('Server is connected');
})