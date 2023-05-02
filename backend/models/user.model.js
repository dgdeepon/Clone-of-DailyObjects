const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    gender:{type:String,require:true},
    password:{type:String,require:true},
    totalPurchase:{type:Number},
    cart:[{type:String}]
});


const UserModel=mongoose.model('userlist',UserSchema);


module.exports=UserModel;