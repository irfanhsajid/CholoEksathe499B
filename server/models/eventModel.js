const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null
    },
    short_desc: {
        type: String,
        default: null
    },
    venue: {
        type: String,
        default: null
    },
    image: {
        type: String,
        default: null
    },
    location: {
        type: String,
        default: null
    },
    price: {
        type: Number,
        default: 0
    },
    max_allowed: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: null
    },
    time: {
        type: String,
        default: null
    },
    going: {
        type: Number,
        default: 0
    },
    access_token: {
        type: String,
        default: null
    },
    category: {
        type: String,
        default: null
    }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
