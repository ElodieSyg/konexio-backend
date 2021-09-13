const express = require('express');
const router = express.Router();
// Import model
const Student = require('../model/student.model');
// Middleware
const checkName = require('../middleware/checkName');

router.route('/')
    .get(async (_req, res) => {
        const students = await Student.find();
        console.log(students)

        res.json({
            status: 'OK',
            message: 'Students list',
            data: students,
        });
    })
    .post(checkName, async (req, res) => {
        const newStudent = await Student.create(req.body);

        res.json({
            status: 'OK',
            message: 'You added a new student',
            data: newStudent,
        });
    })

router.route('/all')
    .delete(async (_req, res) => {
        const deleteStudent = await Student.find({ name: 'Elodie Sayavong' });
        await Student.deleteMany({ name: 'Elodie Sayavong' })

        console.log(deleteStudent);

        res.json({
            status: 'OK',
            message: 'You deleted this student',
            data: Student,
        });
    });

module.exports = router;