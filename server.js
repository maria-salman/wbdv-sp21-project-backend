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

const mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PW}@cluster0.zpmbu.mongodb.net/whiteboard?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true});

// Configures CORS
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

app.listen(process.env.PORT || 4000)