import { IncomingMessage, ServerResponse } from "http";

// req-res will go to RouteHandler
export type RouteHandler = (req : IncomingMessage, res : ServerResponse) => void;

// <string> = method (get/post...), Map<string = route_name('/api'), RouteHandler = req,res>

export const routes : Map<string, Map<string, RouteHandler>> = new Map()


function addRoutes(method:string, path : string, handler : RouteHandler) {
    
    if(!routes.has(method)) {
        routes.set(method, new Map())
    }
    routes.get(method)!.set(path, handler)
}

export default addRoutes;