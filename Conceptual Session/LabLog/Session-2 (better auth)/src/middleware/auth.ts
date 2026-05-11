// custom authentication (req,res,next)

import type { Request, Response, NextFunction } from "express";

import jwt, { type JwtPayload } from "jsonwebtoken"
import {auth as betterAuth} from "../lib/auth"

declare global {
    namespace Express {
        interface Request {
            user : JwtPayload
        }
    }
}

//! manual role verification
// const auth = (roles?:string[]) => {

//     return (req:Request,res:Response,next:NextFunction) => {

//         //! bearer token ex : Bearer <token>
//         const token = req.headers.authorization?.split(" ")[1]
//         console.log('token in auth', token);

//         if(!token) {
//             res.send("No valid token found")
//         }

//         //* verify the token
//         try {
//             const decodedToken = jwt.verify(token as string, 'this is verification secret');

//             console.log('decoded token : ', decodedToken);

//             if(!decodedToken) {
//                 return res.send({message : " Unauthorized token"})
//             }
            
//             req.user = decodedToken as JwtPayload;

//             if(roles && !roles?.includes(req.user.role)) {
//                 return res.send({message : "Invalid Role!"})
//             }

//             next()
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }






// ===========================================================================

//* role verificatin using "better-auth"
const auth = (resource:"user"|"equipment", action:string) => {

    return async (req:Request, res:Response, next:NextFunction) => {


        //* verify the better auth session
        try {
            const session = await betterAuth.api.getSession({
                headers : req?.headers
            })
            console.log("session from better auth : ", session);

            if(!session) {
                res.status(401).send({message : "Un authorized by better auth"})
            }

            const hasPermission = await betterAuth.api.userHasPermission({
                body : {
                    userId : session?.user.id,
                    role : session?.user.role || "user" as any,
                    permissions : {
                        [resource] : [action]

                    }
                }
            })
            console.log("hasPermission", {hasPermission});

            if(!hasPermission || !hasPermission.success) {
                res.status(401).send({message : `Forbidden by better auth, dont have permisson to ${action} ${resource}`})
            }


            next()
        } catch (error) {
            console.log(error);
        }
    }
}


export default auth;