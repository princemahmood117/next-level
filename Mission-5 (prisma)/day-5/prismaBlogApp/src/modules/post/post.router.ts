import express, { Router } from "express";
import { postController } from "./post.controller";
import authHandler, { UserRole } from "../../middlewares/authMiddleware";


const router = express.Router();



router.get('/', postController.getAllPost)


// Example route for creating a post
router.post('/', authHandler(UserRole.USER), postController.createPost)





export const postRouter:Router = router;