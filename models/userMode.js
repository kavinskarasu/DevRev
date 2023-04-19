const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt=require('bcryptjs')
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please provide your name']
    },
    email:{
        type:String,
        required:[true,'Please provide your email'],
        unique:true,
        lowercase:true,
        validate:[validator.isEmail,'Please provide the valid email']
    },
    password:{
        type:String,
        required:[true,'Please provide a password'],
        minlen:5
    },
    passwordConfirm:{
        type:String ,
        required:[true,'Please confirm password'],
        validate:{
            validator:function(el){
                return el===this.password
            }
        }
    },
    role:{
        type:String,
        default:"user"
    }

})
UserSchema.pre('save',async function(next){
    if(!this.isModified('password'))next();
    this.password=await bcrypt.hash(this.password,12);
    this.passwordConfirm=undefined;
    next();

})

UserSchema.methods.verifyPassword=(candidatedPassword,userPassword)=>{
    return bcrypt.compare(candidatedPassword,userPassword);
}
const User=mongoose.model('User',UserSchema);

module.exports=User;