import express, { Router } from "express";
import { postController } from "./post.controller";
import authHandler, { UserRole } from "../../middlewares/authMiddleware";


const router = express.Router();



router.get('/', postController.getAllPost)


router.get('/my-posts', authHandler(UserRole.USER, UserRole.ADMIN), postController.getUsersPosts)


router.get('/:postId', postController.getPostById)



// Example route for creating a post
router.post('/', authHandler(UserRole.ADMIN, UserRole.USER), postController.createPost)





export const postRouter:Router = router;