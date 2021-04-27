const mongoose = require('mongoose');
const usersSchema = require('./authored-books-schema');
const authoredBooksModel = mongoose.model('AuthoredBooksModel', usersSchema);

module.exports = authoredBooksModel;