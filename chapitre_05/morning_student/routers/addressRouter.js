const express = require("express");
const router = express.Router();
// Import model
const Address = require("../models/addressModel");

router.route("/")
    .get(async (req, res) => {
        const adresses = await Address.find();

        res.json({
            status: "OK",
            data: adresses,
        })
    })
    .post(async (req, res) => {
        try {
            const addAdress = await Address.create(req.body);

            res.json({
                status: "OK",
                message: "A new adress was added",
                data: addAdress,
            });
        } catch (err) {
            res.status(400).json({
                message: err,
            });
        };
    });

module.exports = router;