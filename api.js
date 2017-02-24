const express = require('express'),
    router = express.Router(),
    { getData } = require('./utils'),
    { baseUrl } = require('./config');

router.get('/topics', getData('&limit=40'));

router.get('/topic/:id', getData());

module.exports = router;
