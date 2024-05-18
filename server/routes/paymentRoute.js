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

// IPN and validation routes
router.post('/ipn', paymentController.ipn);
router.post('/validate', paymentController.validatePayment);

// Fetch order by transaction ID
router.get('/payment/details/:tran_id', paymentController.getPaymentDetails);

module.exports = router;
