// src/server.js

// Define the server's required resources
const express = require('express');
const config = require('./config');
const path = require('path');
const publicPath = path.resolve(__dirname, '../public');
const router = require('./routes');
const bodyParser = require('body-parser');

// Define an app
const app = express();
app.use(express.static(publicPath));
app.use('/api', router);

// Make sure the app is using body-parser
app.use(function(req, res, next) {
    console.log("req.body BEFORE parsing", req.body);
    next();
})

app.use(bodyParser.json());

app.use(function(req, res, next) {
  console.log("req.body AFTER parsing", req.body);
  next();
})

// Start the server
app.listen(config.port, function() {
    console.log(`${config.appName} is listening on port ${config.port}`);
});