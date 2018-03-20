// src/server.js

// Define the server's required resources
const express = require('express');
const config = require('./config');
const path = require('path');
const publicPath = path.resolve(__dirname, '../public');

// Define an app
const app = express();

app.use(express.static(publicPath));
app.use(function(req, res, next) {
    res.end("Hello World!");
});