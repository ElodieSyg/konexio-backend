const hotelData = require('../data/hotelData');

function matchHotel(req, res, next) {
    const newHotel = req.body;
    const nameArray = hotelData.map(obj => obj.name)
    const include = nameArray.includes(newHotel.name)

    if (!include) {
        hotelData.push(newHotel);
        next();
    } else {
        res.json({
            status: 'FAIL',
            message: `${newHotel.name} existe déjà`,
        });
        next();
    };
};

module.exports = matchHotel;