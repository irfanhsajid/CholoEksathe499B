const express = require('express');
const cors = require('cors');


const router = express.Router();


const authController = require('../controllers/authController')



router.get('/', authController.test)
router.get('/users', authController.getUsers); //for user testcase
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.get('/profile', authController.getProfile);
router.post('/logout', authController.logoutUser);
module.exports = router;


