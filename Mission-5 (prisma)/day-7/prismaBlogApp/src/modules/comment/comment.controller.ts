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





const getCommentById = async(req:Request, res:Response) => {

    try {
        const {comId} = req.params;
        const result = await commentService.getCommentById(comId as string)
        res.status(200).json(result)
    } 
    
    
    catch (error) {
        res.status(400).json({
            error : "Comment fetch failed!",
            details : error
        })
    }
 
}



const getCommentsByAuthor = async(req:Request, res:Response) => {

  try {
    const {authorId} = req.params;
    const result = await commentService.getCommentsByAuthor(authorId as string)
    res.status(200).json(result)
  }     
  
  catch (error) {
        res.status(400).json({
            error : "Comment by author fetch failed!",
            details : error
        })
    }
}



const deleteComment = async(req:Request, res:Response) => {

  try {

    const user = req.user;

    if(!user) {
        return "USER NOT FOUND"
    }

    const {commID} = req.params
 
    await commentService.deleteComment(commID as string, user?.id as string)
    res.status(200).json({
        success : true,
        message : "comment delete successfull"
    })
  }   
  
  catch (error) {
        res.status(400).json({
            error : "deletion failed!",
            details : error
        })
    }
}




const updateComment = async(req:Request, res:Response) => {

    try {
        
    const authorId = req.user?.id

    const {commentID} = req.params

    const updateData = req.body;

    const result = await commentService.updateComment(commentID as string, updateData, authorId as string)
    res.status(200).json({
        success : true,
        message : result
    })
    }  

    catch (error) {
        res.status(400).json({
            error : "comment update failed!",
            details : error
        })
    }
}




const moderateComment = async(req:Request, res:Response) => {

    try {
        const {comId} = req.params;
        const moderateData = req.body;
        const result = await commentService.moderateComment(comId as string, moderateData)
        res.status(200).json(result)
    } 
    
    catch (error) {
            res.status(400).json({
            error : "error inside moderate",
            details : error
        })
    }
}


export const commentController = {
    createComment,
    getCommentById,
    getCommentsByAuthor,
    deleteComment,
    updateComment,
    moderateComment
}