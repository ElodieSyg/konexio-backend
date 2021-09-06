const restaurantData = require('../data/restaurantData');

function matchRestaurant(req, res, next) {
    const newRestaurant = req.body;
    const nameArray = restaurantData.map(obj => obj.name)
    const include = nameArray.includes(newRestaurant.name)

    if (!include) {
        restaurantData.push(newRestaurant);
        next();
    } else {
        res.json({
            status: 'FAIL',
            message: `${newRestaurant.name} existe déjà`,
        });
        next();
    };
};

module.exports = matchRestaurant;