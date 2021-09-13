// Import model
const Hotel = require('../model/hotelModel');

async function matchHotel(req, res, next) {
    const name = req.body.name;
    const hotel = await Hotel.findOne({ name: new RegExp(name, 'i') });

    if (hotel) {
        res.json({
            status: 'OK',
            message: `${name} already exist`,
        });
    } else {
        next();
    };
};

module.exports = matchHotel;