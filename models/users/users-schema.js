const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    username: {
        unique: true,
        type: String
    },
    password: String,
    fullName: String,
    email: String,
    role: {
        type: String,
        enum: ['READER', 'AUTHOR']
    }
}, {collection: 'users'});

module.exports = usersSchema;