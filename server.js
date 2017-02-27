const express = require('express'),
    { AsyncGet, HandleRequest } = require('./utils'),
    app = new express(),
    router = express.Router(),
    { port } = require('./config'),
    serverRouter = require('./router');


serverRouter(app, express);

app.listen(port, () => {
    console.log(`server is on localhost:${port}/`)
});

module.exports = port;