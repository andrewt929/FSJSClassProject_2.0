// src/server.js

// Define the server's required resources
const express = require('express');
const config = require('./config');

// Define an app
const app = express();

app.use(function(req, res, next) {
    res.end("Hello World!");
});