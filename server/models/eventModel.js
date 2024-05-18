const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    short_desc: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    max_allowed: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    going: {
        type: Number,
        required: true
    },
    access_token: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },

});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
