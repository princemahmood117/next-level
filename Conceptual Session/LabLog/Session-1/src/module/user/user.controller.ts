import type { RequestHandler } from "express";
import { prisma } from "../../lib/prisma";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";

const register:RequestHandler = async(req,res) => {

    const payload = req.body;

    const hashPassword = await bcrypt.hash(payload?.password, 10)
    console.log('hashed password from register : ', hashPassword);

    const user = await prisma.user.create({
        data : {...payload, password:hashPassword}
    })

    res.send({success:true, message : "registered successfull", data:user})
}




const login:RequestHandler = async(req,res) => {

    const {email, password} = req.body;

    
    const user = await prisma.user.findUnique({
        where : {
            email : email
        }
    })

    if(!user) {
        res.send({message : "User not found by email"})
    }

    const matchPassword = await bcrypt.compare(password, user?.password as string)
    console.log('password matched in login : ', matchPassword);

    if(!matchPassword) {
        res.send({message : "password not matched!"})
    }

    const token = jwt.sign({id : user?.id, role : user?.role}, 'this is verification secret',{expiresIn : '7d'})


    res.send({success:true, message : "logged in successfull", token})
}


export const userController = {
    register,
    login
}