const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    address: {
        type: mongoose.Types.ObjectId,
        ref: "address",
        required: true,
    },
});

const Student = mongoose.model("students", StudentSchema);

module.exports = Student;