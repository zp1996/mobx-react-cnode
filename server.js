const express = require('express'),
    { AsyncGet, HandleRequest } = require('./utils'),
    api = require('./api'),
    app = new express(),
    router = express.Router(),
    { port } = require('./config');

// 爬cnode页面
router.get('/api', HandleRequest);
router.get('/getstart', HandleRequest);
router.get('/about', HandleRequest);
// 请求cnode接口
app.use('/api/v1', api);

app.use(router);

app.listen(port, () => {
    console.log(`server is on localhost:${port}/`)
});