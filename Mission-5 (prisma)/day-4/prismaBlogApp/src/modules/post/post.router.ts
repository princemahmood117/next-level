import express, { NextFunction, Request, Response, Router } from "express";
import { postController } from "./post.controller";
import authHandler, { UserRole } from "../../middlewares/authMiddleware";


const router = express.Router();



// Example route for creating a post
router.post('/', authHandler(UserRole.USER), postController.createPost)

router.get('/', postController.getAllPost)
router.get('/authorID', postController.findPostByAuthorId)

export const postRouter:Router = router;