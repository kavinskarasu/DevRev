const User=require('../models/userMode');

exports.signUp=async(req,res)=>{
    try{
    const{name,email,password,passwordConfirm}=req.body
    const newUser=await User.create({
        name,
        email,
        password,
        passwordConfirm
    })
    res.status(201).json({
        status:"success",
        data:"User Created"
    })


     }catch(err){
        res.status(400).json({
            status:"failure",
            message:err
        })
}
}