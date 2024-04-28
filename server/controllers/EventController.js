const Event = require("../models/eventModel");

const createEvent = async (req, res) => {
    console.log("Req Body", req.body);
    try {
        // Extract event data from the request body
        const { name, venue, location, price, max_allowed, date, time, going, access_token } = req.body;

        // Create a new event instance
        const newEvent = new Event({
            name,
            venue,
            location,
            price,
            max_allowed,
            date,
            time,
            going,
            access_token
        });

        // Save the event to the database
        const savedEvent = await newEvent.save();

        // Send a success response with the saved event data
        res.status(201).json({
             message: 'Event created successfully', 
             event: savedEvent
             });

    } catch (error) {
        // If an error occurs, send an error response
        console.error('Error creating event:', error);
        res.status(500).json({ error: 'Failed to create event' });
    }
};

const getAllEvents = async(req,res)=>{
    try {
        const events = await Event.find();
        res.send(events);
    } catch (error) {
        res.status(500).send(error.message)
    }
}


const testEvent = (req, res) => {
    res.send(' EVENT Module is working');
}
module.exports = {
    createEvent,
    getAllEvents,
    testEvent,
}
