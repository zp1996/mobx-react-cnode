const { getData } = require('./utils'),
    { baseUrl } = require('./config'),
    { HandleRequest } = require('./utils');

module.exports = (app, express) => {
    const ServerRouter = express.Router(), 
        APIRouter = express.Router();
    
    APIRouter.get('/topics', getData('&limit=40'));
    APIRouter.get('/topic/:id', getData());
    app.use('/server/api/v1', APIRouter);

    ServerRouter.get('/api', HandleRequest);
    ServerRouter.get('/getstart', HandleRequest);
    ServerRouter.get('/about', HandleRequest);
    app.use('/server', ServerRouter);
};