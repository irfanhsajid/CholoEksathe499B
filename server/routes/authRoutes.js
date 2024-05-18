const express = require('express');
const cors = require('cors');


const router = express.Router();


const { test, registerUser, loginUser, getProfile, logoutUser, getUsers } = require('../controllers/authController')



router.get('/', test)
router.get('/users', getUsers); //for user testcase
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', getProfile);
router.post('/logout', logoutUser);
module.exports = router;


