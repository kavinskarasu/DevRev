
const express=require('express');
const app=express();
const Flightrouter=require('./routers/flightRouter')
app.use(express.json());
app.use('/api/v1/flights',Flightrouter);

module.exports=app;