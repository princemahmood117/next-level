import { Request,Response } from "express";
import { postService } from "./post.service";


const createPost = async(req:Request, res: Response) => {
    try {
        const result = await postService.createPost(req.body)
        console.log(req.body);
        res.status(201).json(result)
    } catch (err) {
        res.status(400).json({
            error : "Post creation failed",
            details : err
        })
    }
}


const getAllPost = async(req:Request, res:Response) => {
    try {
        const allPosts = await postService.getAllPosts()
        console.log('all post : ', allPosts);
        res.status(200).json(allPosts)
    } catch (err) {
        res.status(400).json({
            error : "Post fetching failed",
            details : err
        })
    }
}


const findPostByAuthorId = async(req:Request, res:Response) => {
  try {
    const result = await postService.getPostByAuthorId()
    console.log(result);
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json({
        message : "Fetching by author Id failed",
        body : error
    })
  }
}

export const postController = {
    createPost,
    getAllPost,
    findPostByAuthorId
}

