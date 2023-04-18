const mongoose=require('mongoose');
const validator=require('validator')
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
        minlen:8   
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
const User=mongoose.model('User',UserSchema);

module.exports=User;