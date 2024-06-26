const express = require('express');
const cors = require('cors');
const paymentController = require("../controllers/paymentController");

const router = express.Router();
//
// router.use(cors({
//     credentials: true,
//     origin: "http://localhost:3000",
//     // origin: "https://techforing-job-portal.vercel.app",
// }));

router.post('/init', paymentController.initiatePayment);
// Payment success, failure, and cancel responses
router.post('/success', paymentController.successPayment);
router.post('/fail', paymentController.failedPayment);
router.post('/cancel', paymentController.cancelledPayment);
// to get all the data's:
router.get('/payment/all', paymentController.getAllPayments);

// IPN and validation routes
router.post('/ipn', paymentController.ipn);
router.post('/validate', paymentController.validatePayment);

// Fetch order by transaction ID
router.get('/payment/details/:tran_id', paymentController.getPaymentDetails);

//get any users payment history and event info 

router.get('/user/event/:email', paymentController.getUserEventByEmail)

module.exports = router;
