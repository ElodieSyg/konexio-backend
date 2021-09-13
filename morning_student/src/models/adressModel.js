const mongoose = require("mongoose");

const AdressSchema = new mongoose.Schema({
    streetName: {
        type: String,
        required: true,
    },
    streetNumber: {
        type: String,
        required: true,
    },
    postCode: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
});

const Adress = mongoose.model("adress", AdressSchema);

module.exports = Adress;