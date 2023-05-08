const exporess=require('express');
const CartModel = require('../models/cart.model');

const cart=exporess.Router();


// get cart details
cart.get('/',async(req,res)=>{
    try {
        const data=await CartModel.find({userId:req.body.userId});
        res.status(200).send(data);
    } catch (error) {
        res.status(501).send({"error":"failed to fetch the cartData"});
    }
});

cart.patch('/cartEdit/:id',async(req,res)=>{
    try {
        await CartModel.findByIdAndUpdate({_id:req.params.id},req.body);
        res.status(200).send({"success":"data is updated"});
    } catch (error) {
        res.status(501).send({"error":"failed to update the data"});
    }
});

// delete product
cart.delete('/cartDelete/:id',async(req,res)=>{
    try {
        await CartModel.findByIdAndDelete({_id:req.params.id});
        res.status(200).send({"success":"data is deleted"});
    } catch (error) {
        res.status(501).send({"error":"failed to delete the data"});
    }
})


// add to cart
cart.post('/addToCart',async(req,res)=>{
    try {
        const data=new CartModel(req.body);
        await data.save();
        res.status(201).send({"success":"producted is added to the cart"});
    } catch (error) {
        res.status(501).send({"error":"failed to add the data to the cart"});
    }
});

module.exports=cart;