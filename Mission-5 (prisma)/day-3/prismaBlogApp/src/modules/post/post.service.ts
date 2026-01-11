
import { Post } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

// since the id, createdAt, updatedAt will be generated automatically so these fields are Ommitted (removed now) while createing post
const createPost = async(data:Omit<Post, 'id' | 'createdAt' | 'updatedAt'>) => {
    const result = await prisma.post.create({
        data 
    })
   
    return result;
}


const getAllPosts = async() => {
    const posts = await prisma.post.findMany()
    return posts
}


const getPostByAuthorId = async() => {
    const postByAuthorId = await prisma.post.findMany({
        where : {
        
            authorId : "authorid2"
        }
    })
    return postByAuthorId;
}

export const postService = {
    createPost,
    getAllPosts,
    getPostByAuthorId
}



