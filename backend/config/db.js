const connection=require('mongoose');

require('dotenv').config();

const db=connection.connect(process.env.mainDBUrl);


module.exports=db;