const expressApp = require('express')();
const server = require('http').Server(expressApp)
const next = require('next');
const { parse } = require('url');
// const io = require('socket.io')(server);
const Vimeo = require('vimeo').Vimeo;

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

// Load environment variables from .env
require('dotenv').load()
const { version } = require('./package.json');

const { VIMEO_ID, VIMEO_SECRET, VIMEO_TOKEN } = process.env;
console.log('Here is values for  VCID', VIMEO_ID);

const clientV = new Vimeo(VIMEO_ID, VIMEO_SECRET, VIMEO_TOKEN);

nextApp.prepare()
.then(() => {
    expressApp.get('/vimeo', (req, res) => {    
        clientV.request({
            path: '/me/appearances',
            query: {
                page: 1,
                per_page: 10,
                fields: 'uri,name,description,duration,created_time,modified_time'
            }
        }, function (error, body, status_code, headers) {
            if (error) {
                console.log('error');
                console.log(error);
            }
            
            console.log('status code');
            console.log(status_code);
            
            res.setHeader('content-type', 'application/json');
            res.send(JSON.stringify(body));
        });             
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