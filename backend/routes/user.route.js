const express=require('express');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const UserModel = require('../models/user.model');
const user=express.Router();


// login
user.post('/login',async(req,res)=>{
    try {
        const user=await UserModel.findOne({email:req.body.email});
        bcrypt.compare(req.body.password,user.password,(err,result)=>{
            if(result){
                console.log(user._id);
                const token=jwt.sign({userId:user._id},'UserLogin');
                res.status(200).send({"success":"login successful","token":token});
            }else{
                res.status(501).send({"failed":"wrong password"});
            }
        })
    } catch (error) {
        res.status(501).send({"error":"user doesn't exit"})   
    }
});

// register
user.post('/register',(req,res)=>{
    try {
        bcrypt.hash(req.body.password,6,async(err,hash)=>{
            if(hash){
                const user=new UserModel({name:req.body.name,email:req.body.email,department:req.body.department,password:hash});
                await user.save();
                res.status(201).send({"success":"user register successful"});
            }else{
                res.status(501).send({"error":"failed to hash the password"});
            }
        })
    } catch (error) {
        res.status(501).send({"error":"failed to create new user"});
    }
});

module.exports=user;