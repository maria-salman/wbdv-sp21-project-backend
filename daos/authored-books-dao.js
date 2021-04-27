const authoredBooksModel = require('../models/authored-books/authored-books-model');

const addAuthoredBook = (userId, bookId, username, bookTitle) => {
    return authoredBooksModel.create({userId, bookId, username, bookTitle});
}

const removeAuthoredBook = (userId, bookId) => {
    return authoredBooksModel.findOneAndRemove({userId, bookId});
}

const getAuthoredBooksForUser = (userId) => {
    return authoredBooksModel.find({userId})
}

const getAllAuthoredBooks = () => {
    return authoredBooksModel.find();
}

const IsAuthoredBook = (userId, bookId) => {
    return authoredBooksModel.countDocuments({userId, bookId});
}

module.exports = {
    addAuthoredBook,
    removeAuthoredBook,
    getAuthoredBooksForUser,
    getAllAuthoredBooks,
    IsAuthoredBook
}
