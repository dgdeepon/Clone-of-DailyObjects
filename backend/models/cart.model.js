const mongoose=require('mongoose');

const CartSchema=mongoose.Schema({
    title:{type:String,require:true},
    image:{type:String,require:true},
    price:{type:Number,require:true},
    quantity:{type:Number,require:true},
    userId:{type:String,require:true}
});

const CartModel=mongoose.model('cartData',CartSchema);


module.exports=CartModel;