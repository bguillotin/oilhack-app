const expressApp = require('express')();
const server = require('http').Server(expressApp)
const favicon = require('serve-favicon');
const path = require('path');
const next = require('next');
const { parse } = require('url');
const pinterestRouter = require('./serverRouter/pinterest-router');
const vimeoRouter = require('./serverRouter/vimeo-router');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

// App version from package.json.
const { version } = require('./package.json');

expressApp.use(favicon(path.join(__dirname, "static", "images", "favicon.png")));

nextApp.prepare()
.then(() => {
    // Routes for pinterest.
    expressApp.use('/pinterest', pinterestRouter);
    // Routes for vimeo.
    expressApp.use('/vimeo', vimeoRouter);
    // Get package.json version.
    expressApp.get('/version', (req, res) => {
        res.setHeader('content-type', 'application/json');
        res.send({version : version});
    });
    
    expressApp.get('*', (req, res) => {
        const parsedUrl = parse(req.url, true);
        // const { pathname, query } = parsedUrl;        
        return handle(req, res);
    });

    server.listen(process.env.PORT, (err) => {
        if (err) throw err;
        console.log('> Ready on', process.env.HOST.concat(':', process.env.PORT));
    });
});