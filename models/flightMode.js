const mongoose = require('mongoose');
const flightSchema=new mongoose.Schema({
    flightNumber: {
        type: Number,
        required: true,
      },
    airLine:{
        type:String,
        required:true,
        unique:true
    },
    origin:{
        type:String,
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    depatureTime:{
      type:String,
      required:true
    },
    arrivalTime:{
        type:String,
       required:true
    },
    availableSeats: {
        type: Number,
       default:60
      }
   
})
const Flight=mongoose.model('Flight',flightSchema);

module.exports=Flight;