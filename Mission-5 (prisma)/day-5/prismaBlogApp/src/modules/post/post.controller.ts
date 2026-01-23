import { Request,Response } from "express";
import { postService } from "./post.service";
import { PostStatus } from "../../../generated/prisma/enums";


const createPost = async(req:Request, res: Response) => {
    try {
        const user = req.user

        if(!user) {
            return res.status(400).json({
            error : "User not found",            
        })
        }

        console.log('request.user from createPost controller : ', req.user);

        const result = await postService.createPost(req.body, user.id as string)
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
        const {search} = req.query;  // req.query contains URL query (after the '?' sign in the url)

        const searchString = typeof search === 'string' ? search : undefined

        const tags = req.query.tags ? (req.query.tags as string).split(',') : []

        // const isFeatured = req.query.isFeatured ? req.query.isFeatured === 'true' : undefined;

        // better approch
        const isFeatured = req.query.isFeatured 
        ? req.query.isFeatured === 'true' ? true : req.query.isFeatured === 'false' ? false : undefined
        : undefined

        console.log('\n isFeatured : ', {isFeatured});

        const status = req.query.status as PostStatus | undefined;

        const allPosts = await postService.getAllPosts({search : searchString, tags, isFeatured, status})
  
        res.status(200).json(allPosts)

    } catch (err) {
        res.status(400).json({
            error : "Post fetching failed",
            details : err
        })
    }
}



export const postController = {
    createPost,
    getAllPost
}

