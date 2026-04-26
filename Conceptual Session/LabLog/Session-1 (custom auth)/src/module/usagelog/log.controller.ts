import type { RequestHandler } from "express";
import { prisma } from "../../lib/prisma";

const createUsageLog:RequestHandler = async(req,res) => {

    console.log('req.user : ', req.user);

    try {
        const payload = req.body;
        
        const log = await prisma.usageLog.create({
            data:{...payload, userId : req.user.id}
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




const updateUsageLog:RequestHandler = async (req, res) => {

    const {id} = req.params;

    // if(!id) return res.send("no id found!")
    if (!id || Array.isArray(id)) {
        return res.send("Invalid id");
}

    try {
        const updateLog = await prisma.usageLog.update({
            where : {id},
            data : {
                endTime : new Date()
            }
        })
        res.send({success:true, message: "UsageLog Updated", data:updateLog})
    } catch (error) {
         res.send({message: "Updating failed!", error})
    }
}




export const logController = {
    createUsageLog,
    getUsageLogs,
    updateUsageLog
}