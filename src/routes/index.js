// src/routes/index.js

const router = require('express').Router();

router.use('/doc', function(req, res, next) {
    res.end(`Documentation http://expressjs.com/`);
  });
  
router.post('/file', function(req, res, next) {
    const newId = '' + FILES.length;
    const data = req.body;
    data.id = newId;

    FILES.push(data);
    res.status(201).json(data);
});

router.put('/file/:fileId', function(req, res, next) {
    const {fileId} = req.params;
    const file = FILES.find(entry => entry.id === fileId);
    if (!file) {
      return res.status(404).end(`Could not find file '${fileId}'`);
    }
  
    file.title = req.body.title;
    file.description = req.body.description;
    res.json(file);
});

module.exports = router;