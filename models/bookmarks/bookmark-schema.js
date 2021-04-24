const mongoose = require('mongoose');

const bookmarkSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UsersModel'
    },
    username: String,
    bookTitle: String,
    bookId: String
}, {collection: 'bookmarks'});

module.exports = bookmarkSchema;