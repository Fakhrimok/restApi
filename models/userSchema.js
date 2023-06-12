const mongoose = require('mongoose')
const userSchema= mongoose.Schema({
    name:String,
    email:{
        type:String,
        require:true
    },
    age:Number
    })
const User=mongoose.model('user',userSchema)
module.exports=User
