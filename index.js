const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const app=express()

const Product = require("./models/product");
const User = require("./models/user");
const Farm = require("./models/farm");


mongoose.connect('mongodb://127.0.0.1:27017/DairyData', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })



app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.render("home")
})

app.get('/product',async (req,res)=>{
    const products = await Product.find({});
    console.log(products)
    res.render("productview",{products})
})

app.listen(3000,()=>{
    console.log("App is listening on port 3000")
})