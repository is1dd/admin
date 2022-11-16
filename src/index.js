 const express = require('express')
const mongoose = require('mongoose')
 const connectDb = require('./config/db')
// const AdminRouter = require('./routes/admin.routes')
// const DashboardRouter = require('./routes/dashboard.routes')
// const AddVoucher = require('./routes/voucher.routes')
const {DashboardRouter,AddVoucherRouter,AdminRouter} = require('./routes');
 const app = express()
 
 app.use(express.urlencoded({extended: true}))
 app.use(express.json())
 app.use('/admin',AdminRouter);
 app.use('/dashboard',DashboardRouter);
 app.use('/voucher',AddVoucherRouter);
 
 app.get('/', (req, res) => res.send('hello'))

app.listen(9000,async () => {
    await connectDb()
    console.log('server started on port 9000')}
    )
