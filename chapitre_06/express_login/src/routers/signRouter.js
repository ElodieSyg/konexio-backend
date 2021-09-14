const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
// Import model
const User = require("../models/userModel");

router.route("/")
    .post(async (req, res) => {
        const { email, password, firstName, surname, dateOfBirth } = req.body;

        const hashedPassword = await bcrypt.hash(password, 12);

        try {
            await User.create({ email, password: hashedPassword, firstName, surname, dateOfBirth });

            res.status(201).json({
                message: `User created with email: ${email}`,
            });
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                message: "This user already exist",
            });
        };
    });

module.exports = router;