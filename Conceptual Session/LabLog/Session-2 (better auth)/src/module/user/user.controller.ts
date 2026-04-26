import type { RequestHandler } from "express";
import { prisma } from "../../lib/prisma";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import { userService } from "./user.service";

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

    const token = await userService.login(email,password)

    res.send({success:true, message : "logged in successfull", token})
}


export const userController = {
    register,
    login
}