const bookmarkDao = require('../daos/bookmark-dao');

module.exports = (app) => {
    const addBookmark = (req, res) => {
        const userId = req.body.userId;
        const bookId = req.body.bookId;
        const username = req.body.username;
        const bookTitle = req.body.bookTitle;
        bookmarkDao.addBookmark(userId, bookId, username, bookTitle)
            .then(bookmark => res.json(bookmark));
    }

    const removeBookmark = (req, res) => {
        const userId = req.body.userId;
        const bookId = req.body.bookId;
        bookmarkDao.removeBookmark(userId, bookId)
            .then(oldBookmark => res.json(oldBookmark));
    }

    const getBookmarksForUser = (req, res) => {
        const userId = req.params.userId;
        bookmarkDao.getBookmarksForUser(userId)
            .then(bookmarks => res.json(bookmarks));
    }

    const getBookmarksForUsername = (req, res) => {
        const username = req.params.username;
        bookmarkDao.getBookmarksForUsername(username)
            .then(bookmarks => res.json(bookmarks));
    }

    const IsBookmark = (req, res) => {
        const userId = req.params.userId;
        const bookId = req.params.bookId;
        bookmarkDao.IsBookmark(userId, bookId).then(count => {
            if (count <= 0) {
                res.send(false);
            } else {
                res.send(true);
            }
        });
    }

    const getAllBookmarks = (req, res) => {
        bookmarkDao.getAllBookmarks()
            .then(posts => res.json(posts));
    }

    app.post('/api/bookmarks/add', addBookmark);
    app.delete('/api/bookmarks/remove', removeBookmark)
    app.get('/api/bookmarks/user/:userId', getBookmarksForUser);
    app.get('/api/bookmarks/username/:username', getBookmarksForUsername);
    app.get('/api/bookmarks/currentUser/:bookId/:userId', IsBookmark)
    app.get('/api/bookmarks/all', getAllBookmarks)
}