const jwt = require('jsonwebtoken');
// const mainKey = process.env.MAINKEY;
const mainKey = 'Sidharth'
async function Authorisation(req,res,next){
    const token = req.headers['authorization'];
    if(!token){ 
        return res.status(401).send("Unauthorised")
    };
    try{
        const verification = jwt.verify(token,mainKey);
        if(verification.email=='admin@gmail.com'&&verification.password=='sid'){
            next();
        }else{
            res.status(401).send("User not authenticated");
        }
    }catch(e){
        console.log(e);
        res.status(501).send(e);
    }
};
module.exports= Authorisation;