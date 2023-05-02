const mongoose=require('mongoose');


const AdminSchema=mongoose.Schema({
    "name":{type:String,require:true},
    "email":{type:String,require:true},
    "password":{type:String,require:true},
    "department":{type:String,require:true}
});


const AdminModel=mongoose.model('AdminSection',AdminSchema);

module.exports=AdminModel;