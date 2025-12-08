// server is created here

import http, { IncomingMessage, Server, ServerResponse } from 'http'
import config from './config';
import { RouteHandler, routes } from './helpers/RouteHandler';
import './routes'
import findDynaicRoute from './helpers/dynamicRouteHandler';



const server : Server = http.createServer((req : IncomingMessage, res : ServerResponse) => {

    const method = req.method?.toUpperCase() || "" ;
    const path = req.url || "";
    const methodMap = routes.get(method)
    const handler : RouteHandler | undefined = methodMap?.get(path)

    if(handler) {
        handler(req, res)
    }

    else if(findDynaicRoute(method, path)) {
        const match = findDynaicRoute(method , path);
        (req as any).params = match?.params;
        match?.handler(req,res);
    }

    else {
        res.writeHead(404, {'content-type' : "application/json"})
        res.end(JSON.stringify({
            success : false,
            message : "route not found!",
            path,
        }))
    }

})




server.listen(config.port , () => {
    console.log(`server is running from port ${config.port}`);
})