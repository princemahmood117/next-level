import { Post, PostStatus } from "../../../generated/prisma/client";
import { PostWhereInput } from "../../../generated/prisma/models";
import { prisma } from "../../lib/prisma";

// since the id, createdAt, updatedAt will be generated automatically so these fields are Ommitted (removed now) while createing post
const createPost = async (
  data: Omit<Post, "id" | "createdAt" | "updatedAt" | "authorId">,
  userId: string,
) => {
  const result = await prisma.post.create({
    data: {
      ...data,
      authorId: userId,
    },
  });

  return result;
};




const getAllPosts = async ({search, tags, isFeatured, status, page, limit, skip, sortBy, sortOrder} : {
  search: string | undefined;
  tags: string[] | [];
  isFeatured : boolean | undefined;
  status : PostStatus | undefined;
  page : number;
  limit : number;   // limit & take are same
  skip : number;
  sortBy : string ;
  sortOrder : string;
}) => {

    const andConditions:PostWhereInput[] = [];

    if(search) {
        andConditions.push({
          OR: [
            {
              title: {
                contains: search,
                mode: "insensitive",
              },
            },

            {
              content: {
                contains: search,
                mode: "insensitive",
              },
            },

            {
              tags: {
                has: search,
              },
            },
          ],
        })
    }



    if(tags.length > 0) {
        andConditions.push({
          tags: {
            hasEvery: tags as string[],
          }
        },)
    }


    if(typeof isFeatured === 'boolean') {
        andConditions.push({
            isFeatured
        })
    }


    if(status) { 
        andConditions.push({
            status
        })
    }





  const posts = await prisma.post.findMany({
    take : limit,

    skip : skip,

    orderBy : {
      [sortBy] : sortOrder     // title : 'desc' ---->  will be look like this
    },

    where : {
      AND : andConditions
    },
  });

  
  const totalCount = await prisma.post.count({
    where : {
      AND : andConditions
    }
  })


  return {
    posts,

    paginationData : { 
      totalCount,
      page,
      limit,
      totalPageCount : Math.ceil(totalCount/limit)
    }
  };
};



// const getPostById = async (postId : string) => {

//   await prisma.post.update({
//     where : {
//       id : postId
//     },
//     data : {
//       views : {
//         increment : 1
//       }
//     }
//   })

//   const postById = await prisma.post.findUnique({
//     where : {
//       id : postId
//     }
//   })

//   return postById;

// }





// "get post by id" using transaction-rollback
const getPostById = async (postId : string) => {

  // hoile 2 tai hobe, naile ekta error holeo full error e dibe, tai "transcation" use kora lagse
  const result = await prisma.$transaction(async(trans) => {

    // update views count
  await trans.post.update({
    where : {
      id : postId
    },
    data : {
      views : {
        increment : 1
      }
    }
  })


  // get post by id
  const postData = await trans.post.findUnique({
    where : {
      id : postId
    }
  })

  return postData
})

return result;

}






export const postService = {
  createPost,
  getAllPosts,
  getPostById
};




// skip = (page - 1) * limit