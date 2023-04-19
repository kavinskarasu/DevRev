const User=require('../models/userMode');
const jwt=require('jsonwebtoken');
const jwtTokenSign=async (id)=>{
    
    const token = await jwt.sign({id},process.env.JWT_SECRECT,{
        expiresIn:process.env.JWT_EXPIRES
    })
    
    return token;
}
exports.signUp=async(req,res)=>{
    try{
    const{name,email,password,passwordConfirm}=req.body
    const newUser=await User.create({
        name,
        email,
        password,
        passwordConfirm
    })
    const token= await jwtTokenSign(newUser._id);
    res.status(201).json({
        status:"success",
        data:"User Created",
        token
    })


     }catch(err){
        res.status(400).json({
            status:"failure",
            message:err,
            
        })
}
}

exports.login=async(req,res)=>{
    const{email,password}=req.body;
    if(!email||!password){
        res.status(400).json({
            status:"failure",
            message:"Please provide email and password"
        })
    }
    const user=await User.findOne({email});
    if(!user|| !(await user.verifyPassword(password,user.password))){
      res.status(401).json({
        status:"failure",
        message:"Incorrect email or password"
      })
    }
    else{
    const token= await jwtTokenSign(user._id);
    res.status(200).json({
        status:"success",
        message:"Login success",
        token
    })
}

}