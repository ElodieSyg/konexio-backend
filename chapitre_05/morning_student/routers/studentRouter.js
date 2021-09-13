const express = require("express");
const router = express.Router();
// Import model
const Student = require("../models/studentModel");

router.route("/")
    .get(async (_req, res) => {
        const students = await Student.find();

        res.json({
            status: "OK",
            message: "Student list",
            data: students,
        });
    })
    .post(async (req, res) => {
        try {
            const addStudent = await Student.create(req.body);

            res.json({
                status: "OK",
                message: `${req.body.firstName} ${req.body.surname} was created`,
                data: addStudent,
            });
        } catch (err) {
            res.status(404).json({
                message: err,
            });
        };
    });

router.route("/:id")
    .get(async (req, res) => {
        const student = await Student.findById(req.params.id).populate("address");

        res.json({
            status: "OK",
            data: student,
        });
    });

module.exports = router;