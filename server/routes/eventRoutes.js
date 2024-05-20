
const express = require('express');

const cors = require('cors');

const router = express.Router();
const eventController =require("../controllers/EventController")
//
// router.use(
//     cors({
//         credentials: true,
//         origin: "http://localhost:3000",
//         // origin: "https://techforing-job-portal.vercel.app",
//
//
//     })
// )

router.get('/test/event', eventController.testEvent);
//why am i not getting the eventController.createEvent even though its in my controller
router.post('/event/create', eventController.createEvent);
router.get('/event/:_id', eventController.getSingleEvent);

router.get('/all/events', eventController.getAllEvents);
router.get('/eventByName', eventController.getEventByName);
router.put('/event/update/:id', eventController.updateEvent);
router.delete('/event/:id', eventController.deleteEvent);

module.exports= router;