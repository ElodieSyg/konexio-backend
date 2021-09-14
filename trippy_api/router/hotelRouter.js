const express = require("express");
const router = express.Router();
// Middleware
const matchHotel = require("../middleware/matchHotel");
// Import model
const Hotel = require("../model/hotelModel");

router.route("/")
    .get(async (_req, res) => {
        const hotels = await Hotel.find();

        res.json({
            status: "OK",
            message: "Vous avez demandé tous les hotels",
            data: hotels,
        });
    })
    .post(matchHotel, async (req, res) => {
        const newHotel = await Hotel.create(req.body);

        res.json({
            status: "OK",
            message: `Vous venez d'ajouter ${newHotel.name} à la liste`,
            data: newHotel,
        });
    });

router.route("/:id")
    .get(async (req, res) => {
        const id = req.params.id;
        const hotel = await Hotel.findById(id);

        res.json({
            status: "OK",
            message: `Vous avez demandé l'hotel identifié numéro ${id}`,
            data: hotel,
        });
    })
    .delete(async (req, res) => {
        const id = req.params.id;
        const deleteHotel = await Hotel.deleteOne({ _id: id });

        res.json({
            status: "OK",
            message: `Vous venez de supprimer l"hotel identifié numéro ${id}`,
        })
    })
    .put(async (req, res) => { // update fonctionne pas
        const id = req.params.id;
        const newName = req.query.name;
        const match = await Hotel.findByIdAndUpdate({ _id: id });

        res.json({
            status: "OK",
            message: "Le nom de l'hotel a été mis à jour",
            data: match,
        });
    });

router.route("/stats")
    .get(async (_req, res) => {
        try {
            const filter = await Hotel.aggregate([
                {
                    $match: { category: { $gte: 3 } },
                },
                {
                    $group: { _id: null, min: { $min: "$price" }, max: { $max: "$price" } }
                },
            ]);

            res.json({
                status: "OK",
                data: filter,
            });
        } catch (err) {
            res.status(404).json({
                message: err,
            })
        };
    });

module.exports = router;