import { prisma } from "../../lib/prisma"


const createComment = async (body:{
    content : string,
    authorId : string,
    postId : string,
    parentId? : string
}) => {


    await prisma.post.findUniqueOrThrow({
        where : {
            id : body.postId
        }
    })

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


export const commentService = {
    createComment,
}