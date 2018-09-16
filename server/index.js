const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const Router = require('./router');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())

 
mongoose.connect(process.env.DB_URL, { server: { 
    // sets how many times to try reconnecting
    reconnectTries: Number.MAX_VALUE,
    // sets the delay between every retry (milliseconds)
    reconnectInterval: 1000 
    } 
});
const db = mongoose.connection;
mongoose.Promise = global.Promise;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', () => console.log("Connected to the DB!"));

app.use('/api', Router)

module.exports = app;