const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

let students = ["Elodie"];

app.use(express.json());
app.use(cors({ credentials: true, origin: true }));

// Functions
function checkName(req, res, next) {
    const newStudent = req.body;
    const check = students.find(student => student === newStudent.name);

    if (newStudent.name !== check) {
        next();
    } else {
        res.json({
            message: 'The student is already on the list',
        });
    };
};

// Routing
app.get('/', (_req, res) => {
    res.json({
        message: 'Students API',
    });
});

app.route('/student')
    .get((_req, res) => {
        res.json({
            message: `Student list`,
            data: students,
        });
    })
    .post(checkName, (req, res) => {
        const newStudent = req.body.name;
        students.push(newStudent);

        res.json({
            message: `The student was added to the list`,
            data: students,
        });
    });

// Starting server
app.listen(PORT, () => {
    console.log(`Server started, listening on port ${PORT}`);
});