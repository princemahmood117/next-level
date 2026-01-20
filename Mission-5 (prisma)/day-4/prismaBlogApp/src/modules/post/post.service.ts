
import { Post } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

// since the id, createdAt, updatedAt will be generated automatically so these fields are Ommitted (removed now) while createing post
const createPost = async(data:Omit<Post, 'id' | 'createdAt' | 'updatedAt' | 'authorId'>, userId : string) => {
    const result = await prisma.post.create({
        data : {
            ...data,
            authorId : userId
        }
    })
   
    return result;
}


const getAllPosts = async(payload : {search : string | undefined}) => {
    const posts = await prisma.post.findMany({
        where : {
            OR : [
            {
                title : {
                contains : payload.search as string,
                mode : 'insensitive'
            }
            },

            {
                content : {
                contains : payload.search as string,
                mode : 'insensitive'
            }
            },
            
            {
                tags : {
                    has : payload.search as string
                }
            }
        ]
        }
    })
    return posts
}


export const postService = {
    createPost,
    getAllPosts
}



