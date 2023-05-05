const exporess=require('express');
const CartModel = require('../models/cart.model');

const cart=exporess.Router();


// get cart details
cart.get('/',async(req,res)=>{
    try {
        const data=await CartModel.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(501).send({"error":"failed to fetch the cartData"});
    }
});



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