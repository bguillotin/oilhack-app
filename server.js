const express = require('express');
const next = require('next');
const { parse } = require('url');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


// Load environment variables from .env
require('dotenv').load()

app.prepare()
.then(() => {
    const server = express();
    
    server.get('*', (req, res) => {
        const parsedUrl = parse(req.url, true);
        const { pathname, query } = parsedUrl;

        return handle(req, res);
    });

    server.listen(process.env.PORT, (err) => {
        if (err) throw err;
        console.log('> Ready on', process.env.HOST.concat(':', process.env.PORT));
    });
});