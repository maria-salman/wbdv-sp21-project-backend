const authoredBookDao = require('../daos/authored-books-dao');

module.exports = (app) => {
    const addAuthoredBook = (req, res) => {
        const userId = req.body.userId;
        const bookId = req.body.bookId;
        const username = req.body.username;
        const bookTitle = req.body.bookTitle;
        authoredBookDao.addAuthoredBook(userId, bookId, username, bookTitle)
            .then(authoredBook => res.json(authoredBook));
    }

    const removeAuthoredBook = (req, res) => {
        const userId = req.body.userId;
        const bookId = req.body.bookId;
        authoredBookDao.removeAuthoredBook(userId, bookId)
            .then(oldBook => res.json(oldBook));
    }

    const getAuthoredBooksForUser = (req, res) => {
        const userId = req.params.userId;
        authoredBookDao.getAuthoredBooksForUser(userId)
            .then(authoredBooks => res.json(authoredBooks));
    }

    const IsAuthoredBook = (req, res) => {
        const userId = req.params.userId;
        const bookId = req.params.bookId;
        authoredBookDao.IsAuthoredBook(userId, bookId).then(count => {
            if (count <= 0) {
                res.send(false);
            } else {
                res.send(true);
            }
        });
    }

    const getAllAuthoredBooks = (req, res) => {
        authoredBookDao.getAllAuthoredBooks()
            .then(bookmarks => res.json(bookmarks));
    }


    app.post('/api/authoredBooks/add', addAuthoredBook);
    app.delete('/api/authoredBooks/remove', removeAuthoredBook)
    app.get('/api/authoredBooks/user/:userId', getAuthoredBooksForUser);
    app.get('/api/authoredBooks/currentUser/:bookId/:userId', IsAuthoredBook)
    app.get('/api/authoredBooks/all', getAllAuthoredBooks)

}