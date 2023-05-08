const express=require('express');
const ProductsModel = require('../models/data.model');

const data=express.Router();


data.get('/:id',async(req,res)=>{
    try {
        const data=await ProductsModel.findOne({_id:req.params.id});
        res.status(200).send(data);
    } catch (error) {
        res.status(501).send({"failed":"failed to get products data"});
    }
});

data.get('/',async(req,res)=>{
    try {
        if(req.query.brand){
            const data=await ProductsModel.find({brand:req.query.brand});
            res.status(200).send(data);
        }else{
            const data=await ProductsModel.find();
            res.status(200).send(data);
        }
    } catch (error) {
        res.status(501).send({"failed":"failed to get products data"});
    }
});







module.exports=data;