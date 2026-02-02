import express, { Router } from "express";
import { postController } from "./post.controller";
import authHandler, { UserRole } from "../../middlewares/authMiddleware";


const router = express.Router();



router.get('/', postController.getAllPost)


router.get('/stats',authHandler(UserRole.ADMIN), postController.getStats)



router.get('/my-posts', authHandler(UserRole.USER, UserRole.ADMIN), postController.getUsersPosts)


router.get('/:postId', postController.getPostById)

router.patch('/:postID', authHandler(UserRole.ADMIN, UserRole.USER), postController.updatePost)

router.delete('/:postID', authHandler(UserRole.ADMIN, UserRole.USER), postController.deletePost)


// Example route for creating a post
router.post('/', authHandler(UserRole.ADMIN, UserRole.USER), postController.createPost)





export const postRouter:Router = router;