const express=require('express');
const ProductsModel = require('../models/data.model');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const AdminModel = require('../models/admin.model');
const UserModel = require('../models/user.model');
const admin=express.Router();


// post
admin.post('/add',async(req,res)=>{
    try {
        const product=new ProductsModel(req.body);
        await product.save();
        res.status(201).send({"success":"data has been added"});
    } catch (error) {
        res.status(501).send({"error":"failed to add the product"});
    }
});

// patch
admin.patch('/edit/:id',async(req,res)=>{
    try {
        await ProductsModel.findByIdAndUpdate({_id:req.params.id},req.body);
        res.status(202).send({"success":"Product is successfully edited"})
    } catch (error) {
        res.status(501).send({"Error":"failed to edit the product"})
    }
})

// delete
admin.delete('/delete/:id',async(req,res)=>{
    try {
        await ProductsModel.findByIdAndDelete({_id:req.params.id});
        res.status(200).send({"success":"product has been deleted"});
    } catch (error) {
        res.status(501).send({"error":"failed to delete the product"});
    }
});

// get user
admin.get('/userList',async(req,res)=>{
    try {
        const data= await UserModel.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(501).send({"error":"failed to get the user data"});
    }
});

// login
admin.post('/login',async(req,res)=>{
    try {
        const user=await AdminModel.findOne({email:req.body.email});
        bcrypt.compare(req.body.password,user.password,(err,result)=>{
            if(result){
                const token=jwt.sign({user:user.name,email:user.email,department:user.department},'AdminUser');
                res.status(200).send({"success":"welcome admin","token":token});
            }else{
                res.status(501).send({"failed":"wrong password"});
            }
        })
    } catch (error) {
        res.status(501).send({"error":"user doesn't exit"})   
    }
});

// register
admin.post('/register',(req,res)=>{
    try {
        bcrypt.hash(req.body.password,6,async(err,hash)=>{
            if(hash){
                const admin=new AdminModel({name:req.body.name,email:req.body.email,department:req.body.department,password:hash});
                await admin.save();
                res.status(201).send({"success":"admin register successful"});
            }else{
                res.status(501).send({"error":"failed to hash the password"});
            }
        })
    } catch (error) {
        res.status(501).send({"error":"failed to create new admin"});
    }
})

module.exports=admin;