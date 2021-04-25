require('dotenv').config()
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello. This is our final project back end.')
})

const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))

const mongoose = require('mongoose');
mongoose.connect(
    'mongodb://localhost:27017/whiteboard-04',
    {useNewUrlParser: true, useUnifiedTopology: true});
// const db_link = 'mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@cluster0.rbkqs.mongodb.net/tripbook?retryWrites=true&w=majority'
//
// const mongoose = require('mongoose');
// mongoose.connect(
//     db_link,
//     {useNewUrlParser: true, useUnifiedTopology: true});

// http://wbdv-sp21-finalproject.herokuapp.com
// http://localhost:3000

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

require('./controllers/users-controller')(app)
require('./controllers/bookmark-controller')(app)
require('./controllers/recommendation-controller')(app)

app.listen(process.env.PORT || 4000)
