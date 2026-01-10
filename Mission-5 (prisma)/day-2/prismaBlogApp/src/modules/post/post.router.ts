import express, { Router } from "express";
import { postController } from "./post.controller";

const router = express.Router();

// Example route for creating a post
router.post('/', postController.createPost)
router.get('/', postController.getAllPost)
router.get('/authorID', postController.findPostByAuthorId)

export const postRouter:Router = router;