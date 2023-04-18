const Flights=require('../models/flightMode');


exports.createFlight=async(req,res)=>{
   
    try{
        const {flightNumber,airLine,origin,destination,depatureTime,arrivalTime}=req.body;
        
    const newFligt=await Flights.create({
        flightNumber,
        airLine,
        origin,
        destination,
        depatureTime,
        arrivalTime
    });
    
    res.status(201).json({
        status:"success",
        data:{
           Flight:newFligt
        }
    })
    }catch(err){
        console.log(err)
        res.status(400).json({
            status:"failure",
            message:err
        })
    }
}

exports.getAllFlights=async(req,res)=>{
    try{
    const flights=await Flights.find();
      res.status(200).json({
        status:"success",
        data:flights
      })
    }catch(err){
       res.stauts(400).json({
        status:"failure",
        message:err
       })
    }
}