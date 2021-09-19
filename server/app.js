require("dotenv").config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require("mongoose");
var cors = require("cors");

const CONNECTION_URL = "mongodb+srv://wenyihu3:wenyihu3@cluster0.mmzpm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true})

var app = express();

var db = mongoose.connection;


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/availability', require('./routes/availability'));
app.use('/reserve', require('./routes/reservation'));

db.on("error", console.error.bind(console, "connection error: "));
db.once("opne", _ => {
    console.log("Connected to DB");
});
module.exports = app;
