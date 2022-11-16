const express = require('express');
const AddVoucherRouter = express.Router();
const jwt = require('jsonwebtoken');
const Authorisation = require('../middleware/Authorisation.middleware');
const Vouchers = require('../models/voucher.model');
// require('dotenv').config();
const {addVouch} = require('../Controller/controllers')
const {updateVouch} = require('../Controller/controllers')
const {deleteVouch} = require('../Controller/controllers')
 
AddVoucherRouter.post('/',Authorisation,addVouch)

AddVoucherRouter.delete("/:id",Authorisation, deleteVouch)
AddVoucherRouter.patch("/:id",Authorisation, updateVouch)
module.exports = AddVoucherRouter;
