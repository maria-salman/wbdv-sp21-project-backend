require('dotenv').config()
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello')
})

const session = require('express-session')
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))

const db_link = 'mongodb+srv://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@cluster0.rbkqs.mongodb.net/tripbook?retryWrites=true&w=majority'

const mongoose = require('mongoose');
mongoose.connect(
   db_link,
   {useNewUrlParser: true, useUnifiedTopology: true});

// const mongoose = require('mongoose');
// mongoose.connect(
//     'mongodb://localhost:27017/whiteboard-02',
//     {useNewUrlParser: true, useUnifiedTopology: true});

// http://wbdv-sp21-finalproject.herokuapp.com
// http://localhost:3000

// Configures CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://wbdv-sp21-finalproject.herokuapp.com');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

require('./controllers/users-controller')(app)

app.listen(process.env.PORT || 4000)
// app.listen(4000)