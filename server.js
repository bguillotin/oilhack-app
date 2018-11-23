const expresApp = require('express')();
const server = require('http').Server(expresApp)
const next = require('next');
const { parse } = require('url');
const io = require('socket.io')(server);

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

// Load environment variables from .env
require('dotenv').load()
const { version } = require('./package.json');

// Send a message to cliente
const messages = [];

// socket.io server
io.on('connection', socket => {
    socket.emit('now', {
        message: version,
    });
});

nextApp.prepare()
.then(() => {
    expresApp.get('*', (req, res) => {
        const parsedUrl = parse(req.url, true);
        const { pathname, query } = parsedUrl;

        return handle(req, res);
    });

    server.listen(process.env.PORT, (err) => {
        if (err) throw err;
        console.log('> Ready on', process.env.HOST.concat(':', process.env.PORT));
    });
});