const express = require('express');
const router = express.Router();
// Data
const restaurantData = require('../data/restaurantData');

// Routers
router.route('/')
    .get((req, res) => {
        res.json({
            status: 'OK',
            message: 'Vous avez demandé tous les restaurants',
            data: restaurantData
        });
    })
    .post((req, res) => { // Faire un middleware pour qu'il n'y ai pas d'hotels similaires
        const newRestaurant = req.body;
        console.log(newRestaurant);

        restaurantData.push(newRestaurant);

        res.json({
            status: 'OK',
            message: `Vous venez d'ajouter le restaurant : ${newRestaurant.name}, à la liste`,
            data: restaurantData,
        });
    });

router.route('/:id')
    .get((req, res) => {
        const id = parseInt(req.params.id);
        const result = restaurantData.find(obj => obj.id === id);

        res.json({
            status: 'OK',
            message: `Vous avez demandé le restaurant identifié numéro ${id}`,
            data: result,
        });
    })
    .delete((req, res) => {
        const id = parseInt(req.params.id);
        const index = restaurantData.findIndex(obj => obj.id === id);
        restaurantData.splice(index, 1);

        res.json({
            status: 'OK',
            message: `Vous venez de supprimer le restaurant : ${id.name}`,
            data: restaurantData,
        });
    })
    .put((req, res) => {
        const id = parseInt(req.params.id);
        const index = restaurantData.findIndex(obj => obj.id === id);
        const newName = req.query.name;

        if (index !== -1) {
            hotelData[index].name = newName;
        };

        res.json({
            status: 'OK',
            message: 'Le nom de du restaurant a été mis à jour',
            data: restaurantData[index],
        });
    });

module.exports = router;