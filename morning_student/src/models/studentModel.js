const mongoose = require("mongoose");
// Import model
const Adress = require("./adressModel");

const StudentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    adress: {
        type: mongoose.Types.ObjectId,
        ref: "adress",
        required: true,
    },
});

const Student = mongoose.model("student", StudentSchema);

module.exports = Student;