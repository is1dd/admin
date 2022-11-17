const Vouchers = require("../models/voucher.model");

const addVouch = async(req,res)=>{
    try{
        const voucher = new Vouchers(req.body);
        await voucher.save()
        res.send(voucher);
    }catch(e){
        console.log(e)
        res.status(501).send(e);
    }
}
const deleteVouch = async (req, res) => {
    let { id } = req.params
    try {
        let data = await Vouchers.findByIdAndDelete(id)
        res.send(data)
    } catch (er) {
        res.status(404).send(er.message)
    }
}

const updateVouch = async (req, res) => {
    let { id } = req.params
    try {
        let update = await Vouchers.findByIdAndUpdate(id, req.body);
        res.send(update)
    } catch (er) {
        res.status(404).send(er.message)
    }
}
module.exports = {
    addVouch ,
    updateVouch,
    deleteVouch
}