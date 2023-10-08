const mongoose = require("mongoose")
const { Schema } = mongoose
const Farm = require("./farm")


    const productSchema = new Schema({
        name:String,
        price:Number,
        qun:Number,
        cal:Number,
        farms:[{type:Schema.Types.ObjectId,ref:"Farm"}]
    });

    const Product = mongoose.model("Product",productSchema)

module.exports = Product;
