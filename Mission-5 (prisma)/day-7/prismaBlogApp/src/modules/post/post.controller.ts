import { Request,Response } from "express";
import { postService } from "./post.service";
import { PostStatus } from "../../../generated/prisma/enums";
import paginationSortingHelper from "../../helpers/paginationSortingHelper";
import { UserRole } from "../../middlewares/authMiddleware";


const createPost = async(req:Request, res: Response) => {

    try {
        const user = req.user;
        if(!user) {
            return res.status(400).json({
            error : "User not found",            
            })
        }

        const result = await postService.createPost(req.body, user.id as string)

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

        const {search} = req.query;  // req.query contains URL query (after the '?' sign in the url)

        const searchString = typeof search === 'string' ? search : undefined

        const tags = req.query.tags ? (req.query.tags as string).split(',') : []

        // const isFeatured = req.query.isFeatured ? req.query.isFeatured === 'true' : undefined;

        // better approch
        const isFeatured = req.query.isFeatured 
        ? req.query.isFeatured === 'true' ? true : req.query.isFeatured === 'false' ? false : undefined
        : undefined

        const status = req.query.status as PostStatus | undefined;


        // PAGINATION
        // const page = Number(req.query.page ?? 1);
        // const limit = Number(req.query.limit ?? 10)

        // const skip = (page - 1) * limit;


        // const sortBy = req.query.sortBy as string | undefined;
        // const sortOrder = req.query.sortOrder as string | undefined;


        const {page, limit, skip, sortBy, sortOrder} = paginationSortingHelper(req.query)
        

        const allPosts = await postService.getAllPosts({search : searchString, tags, isFeatured, status, page, limit, skip, sortBy, sortOrder})
  
        res.status(200).json(allPosts)

    } catch (err) {
        res.status(400).json({
            error : "Post fetching failed",
            details : err
        })
    }
}


const getPostById = async (req : Request, res : Response) => {

    try {

        const {postId} = req.params;
        console.log(postId);
        
        if(!postId) {
            throw new Error('post id is required!')
        }

        const result = await postService.getPostById(postId)
        
        res.status(201).json(result)
        
    } catch (err) {
        res.status(400).json({
            error : "Post fetching failed by id",
            details : err
        })
    }
}








const getUsersPosts = async(req:Request, res:Response) => {

    try {
    const user = req.user

    if(!user) {
        throw new Error('User not found for single post fetch!')
    }

    const result = await postService.getUsersPosts(user?.id)
    res.status(200).json(result)
    } 
    catch (err) {
        const erroMessage = (err instanceof Error) ? err.message : "error inside single users post fetching!"  
        res.status(400).json({
            error : " single user's Post fetching failed",
            details : erroMessage
        })
    }
}




// update post
const updatePost = async(req:Request, res:Response) => {

   try {
    const user = req.user;
    const {postID} = req.params;

    if(!user) {
        throw new Error("User not found for update")
    }

    const isAdmin = user?.role === UserRole.ADMIN

    const updateData = req.body

    const result = await postService.updatePost(postID as string, updateData, user?.id, isAdmin)
    res.status(200).json(result)
   }  
   
   catch (err) {
        const erroMessage = (err instanceof Error) ? err.message : "error inside single users post update!"  
        res.status(400).json({
            error : "single user's Post update failed",
            details : erroMessage
        })
    }
}


// statistics post
const deletePost = async(req:Request, res:Response) => {

    try {
    
    const user = req?.user;
    const isAdmin = user?.role === UserRole.ADMIN
    const {postID} = req.params;
    
    if(!user) {
        throw new Error("User not found for update")
    }

    await postService.deletePost(postID as string, user.id, isAdmin)
    res.status(200).json({
        success : true,
        message : `post id ${postID} delete successfull! `
    })
}   
   catch (err) {
        const erroMessage = (err instanceof Error) ? err.message : "error inside single users post update!"  
        res.status(400).json({
            error : "Failed to delete user's post!",
            details : erroMessage
        })
    }
}


// Delete post
const getStats = async(req:Request, res:Response) => {

    try {

    await postService.getStats()
    res.status(200).json()
}   
   catch (err) {
        const erroMessage = (err instanceof Error) ? err.message : "error inside single users post update!"  
        res.status(400).json({
            error : "",
            details : erroMessage
        })
    }
}



export const postController = {
    createPost,
    getAllPost,
    getPostById,
    getUsersPosts,
    updatePost,
    deletePost,
    getStats
}

