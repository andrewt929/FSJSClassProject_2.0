// src/routes/index.js

const router = require('express').Router();

router.use('/doc', function(req, res, next) {
    res.end(`Documentation http://expressjs.com/`);
  });
  
  module.exports = router;