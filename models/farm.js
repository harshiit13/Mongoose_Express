const mongoose = require("mongoose")
const { Schema } = mongoose
const Product = require("./product");
const User = require("./user")


    const farmschema = new Schema({
        name:{
            type:String
        },
        size:{
            type:Number
        },
        owner:{type : Schema.Types.ObjectId,ref:"User"},
        products:[{type:Schema.Types.ObjectId,ref:"Products"}],
        img:String,
        location:String,
        Describtion:String,
    });

    const Farm= mongoose.model('Farm',farmschema);
    module.exports = Farm;