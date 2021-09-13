const Student = require('../model/student.model');

function checkName(req, res, next) {
    const newStudent = req.body;
    const check = Student.find(student => student === newStudent.name);

    if (newStudent.name !== check) {
        next();
    } else {
        res.json({
            message: 'The student is already on the list',
        });
    };
};

module.exports = checkName;