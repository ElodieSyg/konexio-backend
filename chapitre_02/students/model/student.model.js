const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
});

const Student = mongoose.model('student', StudentSchema);

module.exports = Student