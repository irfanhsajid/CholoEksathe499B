const Event = require("../models/eventModel");

const createEvent = async (req, res) => {
    console.log("Req Body", req.body);
    try {
        // Extract event data from the request body
        const { name, venue, image, location, price, max_allowed, date, time, going, access_token, short_desc} = req.body;

        // Create a new event instance
        const newEvent = new Event({
            name,
            venue,
            image,
            location,
            price,
            max_allowed,
            date,
            time,
            going,
            access_token,
            short_desc,
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

const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.send(events);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const getSingleEvent = async (req, res) => {
    try {
        // Extract event ID from the request parameters
        const eventId = req.params._id;
        // console.log("Event Id", eventId);
        // Find the event in the database by its ID
        const event = await Event.findById(eventId);

        // If the event is found, send it as a response
        if (event) {
            res.status(200).json(event);
        } else {
            // If the event is not found, send a 404 Not Found response
            res.status(404).json({ error: 'Event not found' });
        }
    } catch (error) {
        // If an error occurs, send a 500 Internal Server Error response
        console.error('Error fetching event:', error);
        res.status(500).json({ error: 'Failed to fetch event' });
    }
};

const getEventByName = async (req, res) => {
    try {
        const eventName = req.query.name;
        // console.log("Event Name", eventName);
        const event = await Event.find({name: eventName});

        if (event) {
            res.status(200).json(event);
        } else {
            res.status(404).json({ error: 'Event not found' });
        }
    } catch (error) {
        console.error('Error fetching event:', error);
        res.status(500).json({ error: 'Failed to fetch event' });
    }
};

const testEvent = (req, res) => {
    res.send(' EVENT Module is working');
}
module.exports = {
    createEvent,
    getAllEvents,
    getSingleEvent,
    testEvent,
    getEventByName
}
