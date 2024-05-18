
const Venue = require('../models/venueModel');

const createVenue = async (req, res) => {
    try {
        // Extract venue data from the request body
        const { name, location, price, max_allowed, access_token, short_desc, image } = req.body;

        // Create a new venue instance
        const newVenue = new Venue({
            name,
            short_desc,
            image,
            location,
            price,
            max_allowed,
            access_token
        });

        // Save the venue to the database
        const savedVenue = await newVenue.save();

        // Send a success response with the saved venue data
        res.status(201).json({
            message: 'Venue created successfully',
            venue: savedVenue
        });

    } catch (error) {
        // If an error occurs, send an error response
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
        // Extract venue ID from the request parameters
        const venueId = req.params._id;
        // console.log("Venue Id", venueId);
        // Find the venue in the database by its ID
        const venue = await Venue.findById(venueId);

        // If the venue is found, send it as a response
        if (venue) {
            res.status(200).json(venue);
        } else {
            // If the venue is not found, send a 404 Not Found response
            res.status(404).json({ error: 'Venue not found' });
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

//Update venue function
const updateVenue = async (req, res) => {
    try {
        // Extract venue data from the request body
        const { name, location, price, max_allowed, access_token, short_desc, image } = req.body;

        // Extract venue ID from the request parameters
        const venueId = req.params._id;

        // Find the venue in the database by its ID
        const venue = await Venue.findById(venueId);

        // If the venue is found, update its data
        if (venue) {
            venue.name = name;
            venue.location = location;
            venue.price = price;
            venue.max_allowed = max_allowed;
            venue.access_token = access_token;
            venue.short_desc = short_desc;
            venue.image = image;

            // Save the updated venue data
            const updatedVenue = await venue.save();

            // Send a success response with the updated venue data
            res.status(200).json({
                message: 'Venue updated successfully',
                venue: updatedVenue
            });
        } else {
            // If the venue is not found, send a 404 Not Found response
            res.status(404).json({ error: 'Venue not found' });
        }
    } catch (error) {
        // If an error occurs, send an error response
        console.error('Error updating venue:', error);
        res.status(500).json({ error: 'Failed to update venue' });
    }
};

const deleteVenue = async (req, res) => {
    try {
        // Extract venue ID from the request parameters
        const venueId = req.params._id;

        // Find the venue in the database by its ID
        const venue = await Venue.findById(venueId);

        // If the venue is found, delete it
        if (venue) {
            await venue.remove();

            // Send a success response
            res.status(200).json({ message: 'Venue deleted successfully' });
        } else {
            // If the venue is not found, send a 404 Not Found response
            res.status(404).json({ error: 'Venue not found' });
        }
    } catch (error) {
        // If an error occurs, send an error response
        console.error('Error deleting venue:', error);
        res.status(500).json({ error: 'Failed to delete venue' });
    }
};

module.exports = {
    createVenue,
    getAllVenue,
    getVenue,
    updateVenue,
    deleteVenue
};

