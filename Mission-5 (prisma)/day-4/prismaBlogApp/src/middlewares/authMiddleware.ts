import { NextFunction, Request, Response } from "express";
import { auth } from "../lib/auth";

export enum UserRole {
    USER = "USER",
    ADMIN = "ADMIN"
}


// global type
declare global {
    namespace Express {
        interface Request {
            user? : {
                id : string,
                email : string,
                name : string,
                role : string,
                emailVerified : boolean,

            }
        }
    }
}

const authHandler = (...roles : UserRole[]) => {
    return async (req : Request, res : Response, next : NextFunction) => {
        try {
            console.log(roles);
        
        console.log('middle ware!!!!!!');


        // get user session
        const session = await auth.api.getSession({
            headers : req.headers as any,            
        })


        if(!session) {
            return res.status(401).json({
                success : false,
                message : "Not Authorized!⚠️"
            })
        }

        if(!session.user.emailVerified) {
             return res.status(403).json({
                success : false,
                message : "Email not verified!⚠️"
            })
        }

        req.user = {
            id : session.user.id,
            email : session.user.email,
            name : session.user.name,
            role : session.user.role as string,
            emailVerified : session.user.emailVerified
        }
        console.log('this is req.user : ', req.user);

        if(roles.length && !roles.includes(req.user.role as UserRole)) {
                return res.status(403).json({
                success : false,
                message : "Forbidden due to Role mismatch!"
            })
        }

        console.log('this is session : ', session);
        next()
        } catch (error) {
            res.status(403).json({
                success : false,
                message : "Forbidden due to Role mismatch!"
            })
        }
    }
}


export default authHandler;