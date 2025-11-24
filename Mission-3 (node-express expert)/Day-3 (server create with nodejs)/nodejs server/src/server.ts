// server is created here

import http, { IncomingMessage, Server, ServerResponse } from 'http'
import config from './config';


const server : Server = http.createServer((req : IncomingMessage, res : ServerResponse) => {

    console.log(`server is running....`);

    if(req.url == '/' && req.method == 'GET') {
        res.writeHead(200, {"content-type" : "application/json"})

        res.end(JSON.stringify({   // send the response back to client
            message : 'hello from node js with typescript home route',
            path : req.url
        })) 
    }

    // another get route
    if(req.url == '/api' &&  req.method == 'GET' ) {
        res.writeHead(200, {"Content-type" : "application/json"})

        res.end(JSON.stringify({
            message : 'hello from api route'
        }))
    }

    // post method
    if(req.url == '/api/user' && req.method == 'POST') {
        const user = {
            id : 1,
            name : 'prince'
        }

        res.writeHead(200, {"content-type" : "application/json"})
        res.end(JSON.stringify(user))
    }
})

server.listen(config.port , () => {
    console.log(`server is running from port ${config.port}`);
})