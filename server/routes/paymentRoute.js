const express = require('express');
const cors = require('cors');
const {
    initiatePayment,
    successPayment,
    failedPayment,
    cancelledPayment,
    validatePayment,
    getPaymentDetails,
    ipn
} = require("../controllers/paymentController");

const router = express.Router();
//
// router.use(cors({
//     credentials: true,
//     origin: "http://localhost:3000",
//     // origin: "https://techforing-job-portal.vercel.app",
// }));

router.post('/init', initiatePayment);
// Payment success, failure, and cancel responses
router.post('/success', successPayment);
router.post('/fail', failedPayment);
router.post('/cancel', cancelledPayment);

// IPN and validation routes
router.post('/ipn', ipn);
router.post('/validate', validatePayment);

// Fetch order by transaction ID
router.get('/payment/details/:tran_id', getPaymentDetails);

module.exports = router;
