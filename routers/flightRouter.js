const express =require('express');
const router=express.Router();
const FlightControlller=require('../controllers/flightController')
const authController=require('../controllers/authController')
router.route('/').post(authController.protect,FlightControlller.createFlight).get(FlightControlller.getAllFlights);
router.route('/:id').patch(FlightControlller.updateFlight)










module.exports=router;