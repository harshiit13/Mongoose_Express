const mongoose = require("mongoose")
const { Schema } = mongoose
const Farm = require("./farm")


const userSchema = new Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String,
    farms:[{ type : Schema.Types.ObjectId,ref:"Farm" }]

});

const User= mongoose.model('User',userSchema);

module.exports = User;