
const express=require("express");
const data = require("./routes/data.route");
const db = require("./config/db");
const admin = require("./routes/admin.route");
const AdminAuth = require("./middlewares/AdminAuth.middleware");
const app=express();
const cors=require('cors');
const user = require("./routes/user.route");

app.use(cors());
app.use(express.json());



// data route
app.use('/data',data);


// admin auth
app.use('/admin/add',AdminAuth);
app.use('/admin/edit/:id',AdminAuth);
app.use('/admin/delete/:id',AdminAuth);
app.use('/admin/register',AdminAuth);
app.use('/admin/userList',AdminAuth);
app.use('/admin/adminList',AdminAuth);

// admin
app.use('/admin',admin);

// user route
app.use('/user',user)




app.listen(8080,async()=>{
    try {
        await db;
        console.log("connected to db");
    } catch (error) {
        console.log({"failed":"failed to connect to DB"})
    }
    console.log('server port is 8080');
})