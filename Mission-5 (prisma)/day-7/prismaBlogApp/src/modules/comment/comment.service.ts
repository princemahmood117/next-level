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



const getCommentsByAuthor = async(authorId : string) => {


    return await prisma.comment.findMany({
        where : {
            authorId : authorId
        },
        orderBy : {
            createdAt : 'desc'
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



const deleteComment = async (commID:string, userID : string) => {

    const commentData = await prisma.comment.findFirst({
        where : {
            id : commID,
            authorId : userID
        }
    })

    if(!commentData) {
        throw new Error("No data found for this comment/user") 
    }

    else {
        return await prisma.comment.delete({
            where : {
                id : commentData.id
            }
        })
    }
    
}


// authorID, commentID, updateData --- needed
const updateComment = async(commentID:string, updateData:{title?:string, content?:string}, authorID:string) => {

    console.log({
        commentID,
        authorID,
        updateData,
    });


    const commentData = await prisma.comment.findFirst({
        where : {
            id : commentID,
            authorId : authorID
        }
    })

    if(!commentData) {
        throw new Error("No data found for this comment/user") 
    }

    else {
        return await prisma.comment.update({
            where : {
                id : commentID
            },
            data : {
                ...updateData
            }
        })
    }
}


export const commentService = {
    createComment,
    getCommentById,
    getCommentsByAuthor,
    deleteComment,
    updateComment
}