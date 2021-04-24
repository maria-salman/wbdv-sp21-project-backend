const mongoose = require('mongoose');

const recommendationSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UsersModel'
    },
    username: String,
    bookTitle: String,
    bookId: String
}, {collection: 'recommendations'});

module.exports = recommendationSchema;