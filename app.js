
const express=require('express');
const app=express();
const Flightrouter=require('./routers/flightRouter')
const Userrouter=require('./routers/userRouter')
app.use(express.json());
app.use('/api/v1/flights',Flightrouter);
app.use('/api/v1/users',Userrouter);

module.exports=app;