const express = require('express');
const cors = require('cors');
const SSLCommerzPayment = require('sslcommerz')

const router=express.Router();

// router.use(
//     cors({
//         credentials: true,
//         origin: "http://localhost:3000",
//         // origin: "https://techforing-job-portal.vercel.app",
//     })
// )
//sslcommerz init
router.get('/init', (req, res) => {
    const data = {
        total_amount: 100,
        currency: 'BDT',
        tran_id: 'REF123',
        success_url: 'http://localhost:7000/success',
        fail_url: 'http://localhost:7000/fail',
        cancel_url: 'http://localhost:7000/cancel',
        ipn_url: 'http://localhost:7000/ipn',
        shipping_method: 'Courier',
        product_name: 'Computer.',
        product_category: 'Electronic',
        product_profile: 'general',
        cus_name: 'Customer Name',
        cus_email: 'cust@yahoo.com',
        cus_add1: 'Dhaka',
        cus_add2: 'Dhaka',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: '1000',
        cus_country: 'Bangladesh',
        cus_phone: '01711111111',
        cus_fax: '01711111111',
        ship_name: 'Customer Name',
        ship_add1: 'Dhaka',
        ship_add2: 'Dhaka',
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: 1000,
        ship_country: 'Bangladesh',
        multi_card_name: 'mastercard',
        value_a: 'ref001_A',
        value_b: 'ref002_B',
        value_c: 'ref003_C',
        value_d: 'ref004_D'
    };
    const sslcommer = new SSLCommerzPayment(process.env.STORE_ID, process.env.STORE_PASSWORD,false) //true for live default false for sandbox
    sslcommer.init(data).then(data => {
        //process the response that got from sslcommerz 
        //https://developer.sslcommerz.com/doc/v4/#returned-parameters
        console.log(data);
        res.redirect(data.GatewayPageURL)
    });
})

// payment success, failed and cancel response 
router.post('/success',async (req,res)=>{
    console.log(req.body);
    res.status(200).json(req.body);
})
router.post('/fail',async (req,res)=>{
    console.log(req.body);
    res.status(400).json(req.body);
})
router.post('/cancel',async (req,res)=>{
    console.log(req.body);
    res.status(400).json(req.body);
})

module.exports = router; 

// on index.js call this 

// app.use('/', require('./routes/sslCommerzInitialSetup'));