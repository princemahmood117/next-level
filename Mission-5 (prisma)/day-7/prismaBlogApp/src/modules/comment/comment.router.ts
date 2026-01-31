import express, { Router } from "express"
import { commentController } from "./comment.controller";
import authHandler, { UserRole } from "../../middlewares/authMiddleware";

const router = express.Router()





router.get('/:comId', authHandler(UserRole.USER, UserRole.ADMIN), commentController.getCommentById)


router.get('/author/:authorId', authHandler(UserRole.USER, UserRole.ADMIN), commentController.getCommentsByAuthor)


router.delete('/delete/:commID', authHandler(UserRole.USER, UserRole.ADMIN), commentController.deleteComment)


router.patch('/update/:commentID', authHandler(UserRole.USER, UserRole.ADMIN), commentController.updateComment)


router.post('/', authHandler(UserRole.USER, UserRole.ADMIN) ,commentController.createComment)


router.patch('/:comId/moderate', authHandler(UserRole.ADMIN), commentController.moderateComment)





export const commentRouter:Router = router;