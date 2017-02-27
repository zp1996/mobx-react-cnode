const http = require('http'),
    cheerio = require('cheerio'), 
    { StringDecoder } = require('string_decoder'),
    decoder = new StringDecoder('utf-8'),
    { baseUrl } = require('./config');

const AsyncGet = url =>
    new Promise((reslove, reject) => {
        http.get(url, res => {
            const chunks = [];
            var size = 0;
            res.on('data', chunk => {
                chunks.push(chunk); 
                size += chunk.length;
            });
            res.on('end', () => {
                const buf = Buffer.concat(chunks, size);
                reslove(decoder.write(buf));
            })
        }).on('error', (e) => {
            reject(e);
        })
    });

const CheerFilter = html => cheerio.load(html)(".topic_content").html();

const HandleRequest = (req, res) => {
    setTimeout(() => {
        AsyncGet(baseUrl + req.route.path).then(html => {
            res.status(200).json({
                text: CheerFilter(html)
            });
        }, e => console.log(e));
    }, 2000);
};

const getData = url => (req, res) => {
    let { _parsedUrl: { path } } = req;
    url = url || '';
    AsyncGet(`${baseUrl}/api/v1${path}${url}`).then(data => {
            res.status(200).json(data)
        });
};

module.exports = {
    AsyncGet,
    HandleRequest,
    getData
};
