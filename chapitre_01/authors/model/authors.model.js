const mongoose = require('mongoose');

const AuthorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    nationality: {
        type: String,
        required: true,
    },
    books: {
        type: Array,
        required: true,
    }
});

const Authors = mongoose.model('authors_global', AuthorsSchema);

module.exports = Authors;