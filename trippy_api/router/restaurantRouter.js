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
        res.json({
            status: 'OK',
            action: 'retourne les restaurants selon les identifiants'
        });
    })
    .delete((req, res) => {
        res.json({
            status: 'OK',
            action: 'delete un restaurants'
        })
    })
    .put((req, res) => {
        res.json({
            status: 'OK',
            action: 'met à jour le nom du restaurants avec un query params :id?name=newName'
        });
    });

module.exports = router;