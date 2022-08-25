const express = require('express')
const bodyParser = require('body-parser')

//setup express app
const app = express()

app.use(bodyParser.json())

app.use('/api', require('./routes/Auth'))

const mongoose = require('mongoose');

//connect your mongodb Link
mongoose.connect(
    "mongodb+srv://manidevelopers:mani%40076@cluster0.ybal7fe.mongodb.net/?retryWrites=true&w=majority"
);


mongoose.Promise = global.Promise;

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log("server is running on", PORT);
});
