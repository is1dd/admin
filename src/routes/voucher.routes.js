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

AddVoucherRouter.delete("/:id", async (req, res) => {
    let { id } = req.params
    try {
        let data = await Consin.findByIdAndDelete(id)
        res.send(data)
    } catch (er) {
        res.status(404).send(er.message)
    }
})
AddVoucherRouter.patch("/:id", async (req, res) => {
    let { id } = req.params
    try {
        let update = await Consin.findByIdAndUpdate(id, req.body);
        res.send(update)
    } catch (er) {
        res.status(404).send(er.message)
    }
})
module.exports = AddVoucherRouter;
