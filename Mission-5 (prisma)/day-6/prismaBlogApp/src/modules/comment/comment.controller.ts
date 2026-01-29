import { Request, Response } from "express";
import { commentService } from "./comment.service";



const createComment = async(req:Request, res : Response) => {
    
    try {

        const user = req.user;  
        console.log(user);
        req.body.authorId = user?.id    // while creating post, set the authorId from the "user id" 


        const result = await commentService.createComment(req.body)
        res.status(200).json(result)
        
    } catch (error) {
        res.status(400).json({
            error : "Comment creation failed",
            details : error
        })
    }

    
}


export const commentController = {
    createComment
}