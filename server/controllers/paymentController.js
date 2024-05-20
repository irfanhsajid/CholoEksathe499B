const Payment = require("../models/paymentModel");
const SSLCommerzPayment = require('sslcommerz')
const { v4: uuidv4 } = require('uuid');

const initiatePayment = async (req, res) => {
    const { total_amount, product_name, event_image, cus_name, cus_email,access_token, event_date} = req.body;
    try {
        const paymentInfo = {
            total_amount: total_amount,
            currency: 'BDT',
            tran_id: uuidv4(),
            success_url: 'http://localhost:7000/success',
            fail_url: 'http://localhost:7000/fail',
            cancel_url: 'http://localhost:7000/cancel',
            ipn_url: 'http://localhost:7000/ipn',
            shipping_method: 'Courier',
            payment_status: "pending",
            product_name: product_name,
            product_category: 'Electronic',
            product_profile: 'Events',
            // product_image: product_image,
            cus_name: cus_name,
            cus_email: cus_email,
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
            value_d: 'ref004_D',
            access_token:access_token,
            event_date:event_date,
            event_image:event_image
        };
        await Payment.create(paymentInfo)
        
        const sslcommer = new SSLCommerzPayment(process.env.STORE_ID, process.env.STORE_PASSWORD, false) //true for live and default false for sandbox
        sslcommer.init(paymentInfo).then(data => {
            //process the response that got from sslcommerz 
            //https://developer.sslcommerz.com/doc/v4/#returned-parameters
            const info = { ...paymentInfo, ...data }
            // console.log(info.GatewayPageURL);
            if (info.GatewayPageURL) {
                res.json(info.GatewayPageURL)
            }
            else {
                return res.status(400).json({
                    message: "SSL session Failed"
                })
            }
        });
    } catch (error) {
        // If an error occurs, send an error response
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to Initiate Payment' });
    }
}
const successPayment = async (req, res) => {
    try {
      console.log(req.body, "Payment Success");
      // Find the payment document using tran_id
      const payment = await Payment.findOne({ tran_id: req.body.tran_id });
  
      // Check if the payment document exists
      if (!payment) {
        return res.status(404).json({ error: 'Payment not found' });
      }
      // Update the payment_status field
      payment.payment_status = "successful";
      await payment.save();
  
      res.redirect(`http://localhost:3000/success/${req.body.tran_id}`);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }
  };

// after being succesful get that payment info details 
const getPaymentDetails = async (req, res) => {
    try {
        const id = req.params.tran_id;
        const result = await Payment.findOne({ tran_id: id });
        res.json(result);
    } catch (error) {
        console.error('Error fetching order:', error);
        res.status(500).send('Internal Server Error');
    }
};


const failedPayment = async (req, res) => {
    try {
        await Payment.deleteOne({ tran_id: req.body.tran_id });
        res.redirect(`http://localhost:3000`);
    } catch (error) {
        console.error('Error during failed payment handling:', error);
        res.status(500).send('Internal Server Error');
    }
};

const cancelledPayment = async (req, res) => {
    try {
        await Payment.deleteOne({ tran_id: req.body.tran_id });
        res.redirect(`http://localhost:3000`);
    } catch (error) {
        console.error('Error during cancelled payment handling:', error);
        res.status(500).send('Internal Server Error');
    }
};

const validatePayment = async (req, res) => {
    try {
        const result = await Payment.findOne({ tran_id: req.body.tran_id });

        if (result && result.val_id === req.body.val_id) {
            const update = await Payment.updateOne({ tran_id: req.body.tran_id }, {
                $set: { paymentStatus: 'paymentComplete' }
            });
            console.log(update);
            res.send(update.modifiedCount > 0);
        } else {
            res.status(400).send("Invalid transaction ID or validation ID");
        }
    } catch (error) {
        console.error('Error during payment validation:', error);
        res.status(500).send('Internal Server Error');
    }
};


// 
const getUserEventByEmail = async (req, res) => {
    try {
      const email = req.params.email;
      const payments = await Payment.find({ cus_email: email });
  
      if (payments.length > 0) {
        res.status(200).json(payments);
      } else {
        res.status(404).send("No payments found for this email");
      }
    } catch (error) {
      console.error('Error fetching user events by email:', error);
      res.status(500).send('Internal Server Error');
    }
  }

//   a function to get all the payment info's
const getAllPayments = async (req, res) => {
    try {
      const payments = await Payment.find();
  
      if (payments.length > 0) {
        res.status(200).json(payments);
      } else {
        res.status(404).json({ message: "No payments found" });
      }
    } catch (error) {
      console.error('Error fetching all payments:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

const ipn = (req, res) => {
    console.log(req.body);
    res.send(req.body);
};

module.exports = {
    initiatePayment,
    successPayment,
    failedPayment,
    cancelledPayment,
    validatePayment,
    getPaymentDetails,
    getUserEventByEmail,
    ipn,
    getAllPayments,
};
