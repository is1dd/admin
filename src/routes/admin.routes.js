const express = require('express');

const AdminRouter = express.Router();
const jwt = require('jsonwebtoken');

// require('dotenv').config();
 
// const mainKey = process.env.MAINKEY;
const mainKey = "Sidharth";
/*************   LOGIN ROUTE    ********** */
AdminRouter.post('/',async(req,res)=>{
    const {email,password} = req.body;
    try{
        if(email=='admin@gmail.com'&&password=='sid'){
            const token = jwt.sign(
                {email:email,password:password},
                mainKey,
                {
                    expiresIn:"24 hour"
                }
                );
                res.send({token});
            }else{
            res.status(401).send("Invalid creadintials");
        }

    }catch(e){
        console.log(e)
        res.status(501).send(e);
    }
})
module.exports = AdminRouter;