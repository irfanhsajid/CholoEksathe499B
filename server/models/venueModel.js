const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    maximum_capacity: {
        type: Number,
        required: true
    },
    image: {
        type: Array,
        required: false
    }
});
