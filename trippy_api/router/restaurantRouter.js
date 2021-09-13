const express = require("express");
const router = express.Router();
// Middleware
const matchRestaurant = require("../middleware/matchRestaurant");
// Import model
const Restaurant = require("../model/restaurantModel");

router.route("/")
    .get(async (_req, res) => {
        const restaurants = await Restaurant.find();

        res.json({
            status: "OK",
            message: "Vous avez demandé tous les hotels",
            data: restaurants,
        });
    })
    .post(matchRestaurant, async (req, res) => {
        const newRestaurant = await Restaurant.create(req.body);

        res.json({
            status: "OK",
            message: `Vous venez d'ajouter ${newRestaurant.name} à la liste`,
            data: newRestaurant,
        });
    });

router.route("/:id")
    .get(async (req, res) => {
        const id = req.params.id;
        const restaurant = await Restaurant.findById(id);

        res.json({
            status: "OK",
            message: `Vous avez demandé l'hotel identifié numéro ${id}`,
            data: restaurant,
        });
    })
    .delete(async (req, res) => {
        const id = req.params.id;
        const deleteRestaurant = await Restaurant.deleteOne({ _id: id });

        res.json({
            status: "OK",
            message: `Vous venez de supprimer l'hotel identifié numéro ${id}`,
        })
    })
    .put(async (req, res) => { // update fonctionne pas
        const id = req.params.id;
        const newName = req.query.name;
        const match = await Restaurant.findByIdAndUpdate({ _id: id });

        res.json({
            status: "OK",
            message: "Le nom de l'hotel a été mis à jour",
            data: match,
        });
    });

module.exports = router;