const express = require('express');
const DashboardRouter = express.Router();
const jwt = require('jsonwebtoken');
const Authorisation = require('../middleware/Authorisation.middleware');
const Vouchers = require('../models/voucher.model');
// require('dotenv').config();
 
// const mainKey = process.env.MAINKEY;
const mainKey = "Sidharth";
/*************   LOGIN ROUTE    ********** */
DashboardRouter.get('/',Authorisation,async(req,res)=>{
    try{
        const vouchers = await Vouchers.find();
        res.send(vouchers);
    }catch(e){
        console.log(e)
        res.status(501).send(e);
    }
})
module.exports = DashboardRouter;