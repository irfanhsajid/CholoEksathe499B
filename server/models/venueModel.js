const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
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
    }
});

const Venue = mongoose.model('Venue', venueSchema);
module.exports = Venue;
