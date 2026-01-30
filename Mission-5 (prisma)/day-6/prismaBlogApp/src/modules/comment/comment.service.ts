import { prisma } from "../../lib/prisma"


const createComment = async (body:{
    content : string,
    authorId : string,
    postId : string,
    parentId? : string
}) => {


    // Prevents creating comments on non-existent posts
    await prisma.post.findUniqueOrThrow({
        where : {
            id : body.postId
        }
    })

    // Validates that the parent comment exists
    if(body.parentId) {
        await prisma.comment.findUniqueOrThrow({
            where : {
                id : body.parentId
            }
        })
    }


    const result = await prisma.comment.create({
        data : body
    })
    return result
}




const getCommentById = async(comId : string) => {
    console.log('comment id', comId);

    return await prisma.comment.findUnique({
        where : {
            id : comId
        },
        
        include : {
            post : {
                select : {
                    id : true,
                    title : true
                }
            }
        }
    })
} 



export const commentService = {
    createComment,
    getCommentById
}