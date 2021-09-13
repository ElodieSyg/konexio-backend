const express = require("express");
const router = express.Router();
// Import model
const Student = require("../models/studentModel");

router.route("/")
    .get(async (_req, res) => {
        const students = await Student.find();

        res.status(200).json({
            status: "OK",
            message: "Student list",
            data: students,
        });
    })
    .post(async (req, res) => {
        try {
            const addStudent = await Student.create(req.body);

            res.status(200).json({
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
        try {
            const student = await Student.findById(req.params.id).populate("student");

            res.status(200).json({
                status: "OK",
                data: student,
            });
        } catch (err) {
            res.status(404).json({
                message: err,
            });
        };
    });

module.exports = router;