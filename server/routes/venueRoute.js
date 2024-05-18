//Route for Venue

const express = require('express');
const router = express.Router();
const venueController = require('../controllers/venueController');

router.get('/all', venueController.getAllVenue);
router.get('/get/:id', venueController.getVenue);
router.post('/create', venueController.createVenue);
router.put('/update/:id', venueController.updateVenue);
router.delete('/delete/:id', venueController.deleteVenue);

module.exports = router;