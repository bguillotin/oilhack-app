const expressApp = require('express')();
const server = require('http').Server(expressApp)
const favicon = require('serve-favicon');
const path = require('path');
const next = require('next');
const { parse } = require('url');
const Vimeo = require('vimeo').Vimeo;

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

// Load environment variables from .env
require('dotenv').load()

const { VIMEO_ID, VIMEO_SECRET, VIMEO_TOKEN } = process.env;
const clientV = new Vimeo(VIMEO_ID, VIMEO_SECRET, VIMEO_TOKEN);
// App version from package.json.
const { version } = require('./package.json');

expressApp.use(favicon(path.join(__dirname, "static", "images", "favicon.png")));

nextApp.prepare()
.then(() => {
    expressApp.get('/version', (req, res) => {
        res.setHeader('content-type', 'application/json');
        res.send({version : version});
    });

    expressApp.get('/vimeo', (req, res) => {
        const params = {
            path: '/me/appearances',
            query: {
                page: 1,
                per_page: 10,
                fields: 'uri,name,description,duration,created_time,modified_time'
            }
        }
        
        clientV.request(params, function (error, body) {
            if (error) {
                console.log('error');
                console.log(error);
            }
            
            res.setHeader('content-type', 'application/json');
            res.send(JSON.stringify(body));
        });             
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