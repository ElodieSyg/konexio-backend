const mongoose = require(`mongoose`);

const RestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    stars: {
        type: Number,
        required: true,
    },
    cuisine: {
        type: String,
        required: true,
    },
    priceCategory: {
        type: Number,
        required: true,
    },
});

const Restaurant = mongoose.model('global_restaurants', RestaurantSchema);

module.exports = Restaurant;