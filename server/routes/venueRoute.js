//Route for Venue

const express = require('express');
const router = express.Router();
const venueController = require('../controllers/venueController');

router.get('/venueTest', venueController.testVenue);
router.get('/venueAll', venueController.getAllVenue);
router.get('/venueGet/:id', venueController.getVenue);
router.post('/venueCreate', venueController.createVenue);
router.put('/venueUpdate/:id', venueController.updateVenue);
router.delete('/venueDelete/:id', venueController.deleteVenue);

module.exports = router;