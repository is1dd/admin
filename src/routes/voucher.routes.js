const express = require('express');
const AddVoucherRouter = express.Router();
const jwt = require('jsonwebtoken');
const Authorisation = require('../middleware/Authorisation.middleware');
const Vouchers = require('../models/voucher.model');
// require('dotenv').config();
 
AddVoucherRouter.post('/',Authorisation,async(req,res)=>{
    try{
        const voucher = new Vouchers(req.body);
        await voucher.save()
        res.send(voucher);
    }catch(e){
        console.log(e)
        res.status(501).send(e);
    }
})
module.exports = AddVoucherRouter;