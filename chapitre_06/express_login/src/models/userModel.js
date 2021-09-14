const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    firstName: {
        type: String,
        require: true,
    },
    surname: {
        type: String,
        require: true,
    },
    dateOfBirth: {
        type: String,
        require: true,
    }
});

const User = mongoose.model("users", UserSchema);

module.exports = User;