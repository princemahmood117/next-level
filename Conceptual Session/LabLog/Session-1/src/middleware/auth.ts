// custom authentication (req,res,next)

import type { Request, Response, NextFunction } from "express";
import type { Role } from "../generated/prisma/enums";
import jwt from "jsonwebtoken"


const auth = (roles?:Role[]) => {

    return (req:Request,res:Response,next:NextFunction) => {

        //! bearer token ex : Bearer <token>
        const token = req.headers.authorization?.split(" ")[1]
        console.log('token in auth', token);

        if(!token) {
            res.send("No valid token found")
        }

        //* verify the token
        try {
            const decodedToken = jwt.verify(token as string, 'this is verification secret');

            console.log('decoded token : ', decodedToken);

            if(!decodedToken) {
                return res.send({message : " Unauthorized token"})
            }

            next()
        } catch (error) {
            console.log(error);
        }
    }
}


export default auth;