const express = require('express');
const router = express.Router();
// Middlewares
// matchHotel = require('../middleware/matchHotel');
// Data
const hotelData = require('../data/hotelData');

// Routers
router.route('/')
    .get((_req, res) => {
        res.json({
            status: 'OK',
            message: 'Vous avez demandé tous les hotels',
            data: hotelData
        });
    })
    .post((req, res) => { // Faire un middleware pour qu'il n'y ai pas d'hotels similaires
        const newHotel = req.body;
        console.log(newHotel);

        hotelData.push(newHotel);

        res.json({
            status: 'OK',
            message: `Vous venez d'ajouter l'hotel : ${newHotel.name}, à la liste`,
            data: hotelData,
        });
    });

router.route('/:id')
    .get((req, res) => {
        const id = req.params.id;
        const result = hotelData.find((obj) => obj.id === id);

        console.log(id)
        console.log(result)
        // result undefined ?

        res.json({
            status: 'OK',
            message: `Vous avez demandé l hotel identifié numéro ${id}`,
            data: result,
        });
    })
    .delete((req, res) => {
        res.json({
            status: 'OK',
            action: 'delete un hotel'
        })
    })
    .put((req, res) => {
        res.json({
            status: 'OK',
            action: 'met à jour le nom de l hotel avec un query params :id?name=newName'
        });
    });

module.exports = router;