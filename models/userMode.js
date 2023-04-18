const mongoose=require('mongoose');
const validator=require('validator')
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please provide your name']
    },
    email:{
        type:String,
        required:[true,'Please provide your email']
    },
    password:{
        type:String,
        required:[true,]
    }

})