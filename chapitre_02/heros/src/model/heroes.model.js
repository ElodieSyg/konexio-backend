const mongoose = require('mongoose');

const HeroesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    power: {
        type: Array,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    isAlive: {
        type: Boolean,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
});

const Heroes = mongoose.model('heroes_global', HeroesSchema);

module.exports = Heroes;