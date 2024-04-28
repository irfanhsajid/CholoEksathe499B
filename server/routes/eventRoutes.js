
const express = require('express');

const cors = require('cors');

const router = express.Router();
const {testEvent,createEvent,getAllEvents}=require("../controllers/EventController")

router.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
        // origin: "https://techforing-job-portal.vercel.app",


    })
)

router.get('/test/event', testEvent);
router.post('/event/create', createEvent);
router.get('/all/events', getAllEvents); 

module.exports= router;