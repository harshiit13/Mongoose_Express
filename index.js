const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const app=express()


mongoose.connect('mongodb://0.0.0.0:27017/DairyData', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })



app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.sendFile(path. join(__dirname, 'views/home.html'));
})

app.listen(3000,()=>{
    console.log("App is listening on port 3000")
})