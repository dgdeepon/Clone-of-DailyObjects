const mongoose=require('mongoose');

const ProductSchema=mongoose.Schema({
    title:{type:String,require:true},
    price:{type:Number,require:true},
    category:{type:String,require:true},
    images:[{type:String,require:true}],
    brand:{type:String,require:true},
    color:{type:String},
    hex:{type:String},
    mrp:{type:Number,require:true},
    additional_info:{name1:{type:String},details1:{type:String},name2:{type:String},details2:{type:String},name3:{type:String},details3:{type:String},name4:{type:String},details4:{type:String},name5:{type:String},details5:{type:String},name6:{type:String},details6:{type:String},name7:{type:String},details7:{type:String},name8:{type:String},details8:{type:String}}
},{
    versionKey:false
});

const ProductsModel=mongoose.model('products',ProductSchema);


module.exports=ProductsModel;