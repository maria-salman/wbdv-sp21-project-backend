const bookmarkModel = require('../models/bookmarks/bookmark-model');

const addBookmark = (userId, bookId, username, bookTitle) => {
    return bookmarkModel.create({userId, bookId, username, bookTitle});
}

const removeBookmark = (userId, bookId) => {
    return bookmarkModel.findOneAndRemove({userId, bookId});
}

const getBookmarksForUser = (userId) => {
    return bookmarkModel.find({userId})
}

const getAllBookmarks = () => {
    return bookmarkModel.find();
}

const IsBookmark = (userId, bookId) => {
    return bookmarkModel.countDocuments({userId, bookId});
}

module.exports = {
    addBookmark,
    removeBookmark,
    getBookmarksForUser,
    getAllBookmarks,
    IsBookmark
}
