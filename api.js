const express = require('express'),
    router = express.Router(),
    { AsyncGet } = require('./utils'),
    { baseUrl } = require('./config');

router.get('/topics', (req, res) => {
    AsyncGet(`${baseUrl}${req.originalUrl}&limit=40`)
        .then(data => {
            res.status(200).json(data)
        })
});

module.exports = router;
