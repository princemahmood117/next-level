import { Router } from "express";
import { equipmentController } from "./equipment.controller";

const equipmentRouter = Router()



equipmentRouter.post('/', equipmentController.createEquipment)

equipmentRouter.get('/', equipmentController.getEquipmentts)





export default equipmentRouter