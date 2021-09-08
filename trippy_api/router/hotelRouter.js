const express = require('express');
const router = express.Router();
// Middleware
const matchHotel = require('../middleware/matchHotel');
// Import model
const Hotel = require('../model/hotel.model');

// Routers
router.route('/')
    .get(async (_req, res) => {
        const hotels = await Hotel.find()

        res.json({
            status: 'OK',
            message: 'Vous avez demandé tous les hotels',
            data: hotels,
        });
    })
/*     .post(async (req, res) => {
        const newHotel = await Hotel.create(req.body)

        res.json({
            status: 'OK',
            message: `Vous venez d'ajouter l'hotel : ${newHotel.name}, à la liste`,
            data: newHotel,
        });
    })
    .put((req, res) => {
        const query1 = req.query.stars;
        const query2 = req.query.city;
        const local = Hotel.includes(query1, query2);

        console.log(query1)
        console.log(query2)
        console.log(local)

        res.json({
            status: 'OK',
            message: '',
        });
    });
 */
/* router.route('/:id')
    .get((req, res) => {
        const id = parseInt(req.params.id);
        const result = hotelData.find((obj) => obj.id === id);

        res.json({
            status: 'OK',
            message: `Vous avez demandé l hotel identifié numéro ${id}`,
            data: result,
        });
    })
    .delete((req, res) => {
        const id = parseInt(req.params.id);
        const index = hotelData.findIndex((obj) => obj.id === id);
        hotelData.splice(index, 1);

        res.json({
            status: 'OK',
            message: `Vous venez de supprimer l hotel : ${id.name}`,
            data: hotelData,
        });
    })
    .put((req, res) => {
        const id = parseInt(req.params.id);
        const index = hotelData.findIndex((obj) => obj.id === id);
        const newName = req.query.name;

        if (index !== -1) {
            hotelData[index].name = newName;
        };

        res.json({
            status: 'OK',
            message: 'Le nom de l hotel a été mis à jour',
            data: hotelData[index],
        });
    });
 */
module.exports = router;