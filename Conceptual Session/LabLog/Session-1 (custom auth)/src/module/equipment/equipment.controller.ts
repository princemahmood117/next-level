import type { RequestHandler } from "express";
import { prisma } from "../../lib/prisma";

const createEquipment:RequestHandler = async(req,res) => {

    try {

        const payload = req.body;
        const equipment = await prisma.equipment.create({
            data : payload
        })

        res.send({success:true, message : "Equipment Added", data:equipment})
        
    } catch (error) {
        res.send({message: "Equipment adding failed!!!!", error})
    }
}


const getEquipmentts:RequestHandler = async (req,res) => {
    try {

        const getEquipmentData = await prisma.equipment.findMany()
        res.send({success:true, message : "Equipment fetched successfull", data:getEquipmentData})
        
    } catch (error) {
        res.send({message: "Equipment fetching failed!!!!", error})
    }
}


export const equipmentController = {
    createEquipment,
    getEquipmentts
}