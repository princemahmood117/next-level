import { Request, Response } from "express";
import { authServices } from "./auth.service";

const loginUser = async(req:Request, res:Response) => {

    const {email,password} = req.body;
    console.log(email,password);

    try {
        const result = await authServices.loginUser(email,password);

        res.status(200).json({
            success:true,
            msaage: "auth ok, login success",
            data : result
        })
    } catch (error:any) {
            res.status(400).json({
            success:false,
            msaage: error,
        })
    }
    
}

export const authController = {
    loginUser
}