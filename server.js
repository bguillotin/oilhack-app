const expressApp = require('express')();
const server = require('http').Server(expressApp)
const favicon = require('serve-favicon');
const path = require('path');
const next = require('next');
const { parse } = require('url');
const Vimeo = require('vimeo').Vimeo;
const PDK = require('node-pinterest');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
// Load environment variables from .env
require('dotenv').load()
// VIMEO
const { VIMEO_ID, VIMEO_SECRET, VIMEO_TOKEN } = process.env;
const clientV = new Vimeo(VIMEO_ID, VIMEO_SECRET, VIMEO_TOKEN);
// PINTEREST
const { PINTEREST_TOKEN } = process.env;
const pinterest = PDK.init(PINTEREST_TOKEN);

// App version from package.json.
const { version } = require('./package.json');

expressApp.use(favicon(path.join(__dirname, "static", "images", "favicon.png")));

nextApp.prepare()
.then(() => {
    expressApp.get('/version', (req, res) => {
        res.setHeader('content-type', 'application/json');
        res.send({version : version});
    });

    expressApp.get('/pinterest/*', (req, res) => {
        const parsedUrl = parse(req.url, true);
        const { pathname, query } = parsedUrl; 
        if (pathname.includes('me')) {
            pinterest.api('me').then((json) => {
                res.setHeader('content-type', 'application/json');
                res.send(JSON.stringify(json.data));
            });
        } else if(pathname.includes('boards')) {
            var options = {
                qs: {
                    limit: 20
                }
            };
            pinterest.api('me/boards', options).then(function(json) {
                res.setHeader('content-type', 'application/json');
                res.send(JSON.stringify(json.data));
            });
        } else if(pathname.includes('pins')) {
            var options = {
                qs: {
                    limit: 20
                }
            };
            pinterest.api('me/pins', options).then(function(json) {
                res.setHeader('content-type', 'application/json');
                res.send(JSON.stringify(json.data));
            });
        }
    });

    expressApp.get('/vimeo', (req, res) => {
        const params = {
            path: '/me/videos',
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

                res.status(500).send('Something broke!');
                return;
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