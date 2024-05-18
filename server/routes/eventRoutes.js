
const express = require('express');

const cors = require('cors');

const router = express.Router();
const {testEvent,createEvent,getAllEvents, getSingleEvent, getEventByName}=require("../controllers/EventController")
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

router.get('/test/event', testEvent);
router.post('/event/create', createEvent);
router.get('/event/:_id', getSingleEvent);

router.get('/all/events', getAllEvents);
router.get('/eventByName', getEventByName);

module.exports= router;