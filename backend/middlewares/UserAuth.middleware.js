const jwt=require('jsonwebtoken');


const UserAuth=async(req,res,next)=>{
    const token=req.headers.authorization;
    if(token){
        const decode=jwt.verify(token.split(' ')[1],'UserLogin');
        if(decode){
            req.body.userId=decode.userId;
            next();
        }else{
            req.status(401).send({"error":"Invalid token"});
        }
    }else{
        res.status(501).send({"error":"token is missing"});
    }
}

module.exports=UserAuth;