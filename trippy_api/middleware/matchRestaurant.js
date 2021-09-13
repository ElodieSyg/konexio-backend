// Import model
const Restaurant = require('../model/restaurantModel');

async function matchRestaurant(req, res, next) {
    const name = req.body.name;
    const hotel = await Restaurant.findOne({ name: new RegExp(name, 'i') });

    if (hotel) {
        res.json({
            status: 'OK',
            message: `${name} already exist`,
        });
    } else {
        next();
    };
};

module.exports = matchRestaurant;