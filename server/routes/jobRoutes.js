const express = require('express');

const cors = require('cors');

const router = express.Router();

const jobController = require('../controllers/jobController');


// router.use(
//     cors({
//         credentials: true,
//         origin: "http://localhost:3000",
//         // origin: "https://techforing-job-portal.vercel.app",
//
//
//     })
// )

router.get('/jobtest', jobController.jobtest);
router.post('/createJobs', jobController.createJobs);
router.get('/viewJobs', jobController.viewJobs);
router.delete('/deleteJob/:_id', jobController.deleteJob)
router.get('/viewJobs', jobController.viewJobs);
router.get('/getJob/:_id', jobController.getJob);
router.put('/updateJob/:_id', jobController.updateJob)

module.exports = router;