import express from 'express'
import { DBConnect } from './db/database.js';
import dotenv from 'dotenv';
import { usermodel } from './models/userModels.js';

dotenv.config({path: '.env'})
const app = express();

app.get('/', function(req,res){

    res.send("india");
})

app.get('/create', function(req,res){
   usermodel.create({
    name:"www",
    email:"www@gmail",
    password:"123434"
   })

   res.send("indiaaaaa donwwww")
})




app.use(express.json()) //to support json thats why we use it.


DBConnect();

app.listen(5000,function(req,res){
    console.log("Server running at 5000")
})


