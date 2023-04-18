const mongoose = require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const port=process.env.PORT||7000;
const DB=process.env.DATABASE;
const app=require('./app')
console.log(DB)
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(()=>{
    console.log("DB connection was successfull")
}).catch((err)=>{
    console.log(err)
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})