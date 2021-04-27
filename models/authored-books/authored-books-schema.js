const mongoose = require('mongoose');

const authoredBooksSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UsersModel'
    },
    username: String,
    bookTitle: String,
    bookId: String
}, {collection: 'authoredBooks'});

module.exports = authoredBooksSchema;