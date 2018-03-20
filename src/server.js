// src/server.js

// Define the server's required resources
const express = require('express');
const config = require('./config');
const path = require('path');
const publicPath = path.resolve(__dirname, '../public');
const router = require('./routes');

// Define an app
const app = express();
app.use(express.static(publicPath));
app.use('/api', router);

// Start the server
app.listen(config.port, function() {
    console.log(`${config.appName} is listening on port ${config.port}`);
});