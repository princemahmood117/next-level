import type { RequestHandler } from "express";
import { prisma } from "../../lib/prisma";

const createUsageLog:RequestHandler = async(req,res) => {

    try {
        const payload = req.body;
        const log = await prisma.usageLog.create({
            data:payload
        })

        res.send({success:true, message: "Log Created", data:log})
    } catch (error) {
        res.send({message: "Log creating failed!!!!", error})
    }
}


const getUsageLogs:RequestHandler = async(req, res) => {

    try {
        const getLogData = await prisma.usageLog.findMany({
            include : {
                user : true,
                equipment : true
            }
        })

        res.send({success:true, message: "Log fetched", data:getLogData})

    } catch (error) {
        res.send({message: "Log fetching failed!!!", error})
    }
}



export const logController = {
    createUsageLog,
    getUsageLogs
}