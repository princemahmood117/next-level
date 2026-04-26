import { Router } from "express";
import userRouter from "../module/user/user.route";
import equipmentRouter from "../module/equipment/equipment.router";
import logRouter from "../module/usagelog/log.router";

const routes = Router()


routes.use('/user', userRouter)

routes.use('/equipment', equipmentRouter)

routes.use('/usageLog', logRouter)



export default routes