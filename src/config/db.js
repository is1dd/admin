const mongoose = require('mongoose');
// require('dotenv').config();
const connectDb = ()=>{
    return mongoose.connect(`mongodb://127.0.0.1:27017/admin`);
}
module.exports  = connectDb;