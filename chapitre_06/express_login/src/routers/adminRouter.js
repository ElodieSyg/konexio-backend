const express = require("express");
const router = express.Router();
// Import middlewares
const protect = require("../middlewares/protect");

router.route("/")
    .get(protect, async (req, res) => {
        console.log("This user make the request: ", req.cookies.jwtData.id);

        res.json({
            message: "You are authorized",
        });
    });

module.exports = router;