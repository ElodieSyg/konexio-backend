const hotelData = require('../data/hotelData');

function matchHotel(req, res, next) {
    const newHotel = req.body;

    for (let i = 0; i < hotelData.length; i++) {
        hotelData.find(obj => obj[0] + 1 === i)

        if (hotelData === newHotel) {
            res.json({
                message: 'L hotel existe déjà',
            })
        } else {
            hotelData.push(newHotel)

            res.json({
                message: 'L hotel à bien été ajouté',
            });
        };
    };
    next()
};

module.exports = matchHotel;