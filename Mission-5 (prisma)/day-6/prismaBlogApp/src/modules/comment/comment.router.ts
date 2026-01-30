import express, { Router } from "express"
import { commentController } from "./comment.controller";
import authHandler, { UserRole } from "../../middlewares/authMiddleware";

const router = express.Router()





router.get('/:comId', authHandler(UserRole.USER, UserRole.ADMIN), commentController.getCommentById)

router.post('/', authHandler(UserRole.USER, UserRole.ADMIN) ,commentController.createComment)





export const commentRouter:Router = router;