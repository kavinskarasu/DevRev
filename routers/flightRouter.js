const express =require('express');
const router=express.Router();
const FlightControlller=require('../controllers/flightController')
router.route('/').post(FlightControlller.createFlight).get(FlightControlller.getAllFlights);
router.route('/:id').patch(FlightControlller.updateFlight)










module.exports=router;