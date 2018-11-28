const expressApp = require('express')();
const server = require('http').Server(expressApp)
const next = require('next');
const { parse } = require('url');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

// Load environment variables from .env
require('dotenv').load();
// App version from package.json.
const { version } = require('./package.json');

// Send a message to cliente
const messages = [];

nextApp.prepare()
.then(() => {
    expressApp.get('/version', (req, res) => {
        res.setHeader('content-type', 'application/json');
        res.send({version : version});
    });

    expressApp.get('*', (req, res) => {
        const parsedUrl = parse(req.url, true);
        const { pathname, query } = parsedUrl;

        return handle(req, res);
    });

    server.listen(process.env.PORT, (err) => {
        if (err) throw err;
        console.log('> Ready on', process.env.HOST.concat(':', process.env.PORT));
    });
});