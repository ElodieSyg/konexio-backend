const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

let students = ["Elodie"];

app.use(express.json());

app.use(cors({ credentials: true, origin: true }));

app.get('/', (req, res) => {
    res.json({
        message: 'Students API',
    });
});

app.get('/student', (req, res) => {
    res.json({
        message: `Student list : ${students}`,
    });
});

app.post('/student', (req, res) => {
    const newStudent = req.body.name;
    console.log(newStudent)
    students.push(newStudent);
    console.log(students)

    res.json({
        message: `The new student was added to the list.`,
        data: students,
    });
});

app.listen(PORT, () => {
    console.log(`Server started, listening on port ${PORT}`);
});