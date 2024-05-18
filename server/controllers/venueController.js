
const Venue = require('../models/venueModel');

const createVenue = async (req, res) => {
    try {
        // Extract venue data from the request body
        const { name, location, short_desc ,maximum_capacity, price, image } = req.body;

        // Create a new venue instance
        const newVenue = new Venue({
            name,
            location,
            short_desc,
            maximum_capacity,
            price,
            image,
        });

        const savedVenue = await newVenue.save();

        res.status(201).json({
            message: 'Venue created successfully',
            venue: savedVenue
        });

    } catch (error) {
        console.error('Error creating venue:', error);
        res.status(500).json({ error: 'Failed to create venue' });
    }
};

const getAllVenue = async (req, res) => {
    try {
        const venues = await Venue.find();
        res.send(venues);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const getVenue = async (req, res) => {
    try {
        const venueId = req.params.id;
        console.log("Venue Id", venueId);
        const venue = await Venue.findById(venueId);

        if (venue) {
            res.status(200).json(venue);
        } else {
            res.status(404).json({ error: 'Venue not found' });
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

//Update venue function
const updateVenue = async (req, res) => {
    try {
        const { name, location, price, max_allowed, access_token, short_desc, image } = req.body;

        const venueId = req.params.id;

        const venue = await Venue.findById(venueId);

        if (venue) {
            venue.name = name;
            venue.location = location;
            venue.price = price;
            venue.max_allowed = max_allowed;
            venue.access_token = access_token;
            venue.short_desc = short_desc;
            venue.image = image;

            const updatedVenue = await venue.save();

            res.status(200).json({
                message: 'Venue updated successfully',
                venue: updatedVenue
            });
        } else {
            res.status(404).json({ error: 'Venue not found' });
        }
    } catch (error) {
        console.error('Error updating venue:', error);
        res.status(500).json({ error: 'Failed to update venue' });
    }
};

const deleteVenue = async (req, res) => {
    try {
        const venueId = req.params.id;
        const venue = await Venue.findById(venueId);

        if (venue) {
            await Venue.deleteOne({ _id: venueId });
            res.status(200).json({ message: 'Venue deleted successfully' });
        } else {
            res.status(404).json({ error: 'Venue not found' });
        }
    } catch (error) {
        console.error('Error deleting venue:', error);
        res.status(500).json({ error: 'Failed to delete venue' });
    }
};

const testVenue = (req, res) => {
    res.send('Test Venue Controller');
}

const getVenueByName = async (req, res) => {
    try {
        const venueName = req.query.name;
        console.log("Venue Name", venueName);
        const venue = await Venue.find({ name: venueName });

        if (venue) {
            res.status(200).json(venue);
        } else {
            res.status(404).json({ error: 'Venue not found' });
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    createVenue,
    getAllVenue,
    getVenue,
    updateVenue,
    deleteVenue,
    getVenueByName,
    testVenue
};

