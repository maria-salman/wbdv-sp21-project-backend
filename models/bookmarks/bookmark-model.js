const mongoose = require('mongoose');
const usersSchema = require('./bookmark-schema');
const bookmarkModel = mongoose.model('BookmarkModel', usersSchema);

module.exports = bookmarkModel;