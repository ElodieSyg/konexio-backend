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
        const id = parseInt(req.params.id);
        const result = hotelData.find((obj) => obj.id === id);

        res.json({
            status: 'OK',
            message: `Vous avez demandé l hotel identifié numéro ${id}`,
            data: result,
        });
    })
    .delete((req, res) => { // problème quand je supprime l'id 2
        const id = parseInt(req.params.id);
        const index = hotelData.findIndex((obj) => obj.id === id);
        hotelData.splice(index, index + 1);

        res.json({
            status: 'OK',
            message: `Vous venez de supprimer l hotel : ${id.name}`,
            data: hotelData,
        });
    })
    .put((req, res) => {
        res.json({
            status: 'OK',
            action: 'met à jour le nom de l hotel avec un query params :id?name=newName'
        });
    });

module.exports = router;