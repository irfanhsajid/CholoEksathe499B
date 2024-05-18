const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
    venue_Id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true
    },
    short_desc: {
        type: String,
        required: true
    },
    maximum_capacity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: [String],
        required: false
    },
    featured_image:{
        type: String,
        required: false
    },
    status: {
        type: Boolean,
        required: true
    }
});

const Venue = mongoose.model('Venue', venueSchema);
module.exports = Venue;
