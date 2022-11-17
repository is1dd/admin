 const mongoose = require('mongoose');
const VoucherShema = new mongoose.Schema({
    brandname:{type:String,required:true},
    desc:{type:String,required:true},
    isFree:{type:Boolean,required:true},
    tnc:{type:String,required:true},
    image:{type:String},

},
{
    versionkey:false,
    timestamps:{
        createdAt:'created_at',
        updatedAt:"updated_at"
    }
})
const Vouchers = mongoose.model('voucher',VoucherShema);
module.exports  = Vouchers;