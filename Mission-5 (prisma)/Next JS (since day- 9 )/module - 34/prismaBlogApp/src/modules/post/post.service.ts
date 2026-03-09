import { CommentStatus, Post, PostStatus } from "../../../generated/prisma/client";
import { PostWhereInput } from "../../../generated/prisma/models";
import { prisma } from "../../lib/prisma";
import { UserRole } from "../../middlewares/authMiddleware";

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

    include : {
      _count : {
        select : {
          comments : true
        }
      },
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

  // get post by post-id
  const postData = await trans.post.findUnique({
    where : {
      id : postId
    },

    include : {
      comments : {
        where : {
          parentId : null,   // parent comment will have "parentId = null"
          status : CommentStatus.APPROVED
        },

        orderBy : {
          createdAt : 'asc'
        },

        include : {
          // replies : true,   // parent comment will include it's child comments (replies), 
          replies : {
            where : {
              status : CommentStatus.APPROVED
            },
            orderBy : {
              createdAt : 'desc'
            }
          }         
          
        }
      },

      // to see total comments
      _count : {
        select : {
          comments : true
        }
      }
    }
  })

  return postData;
})

return result;

}




 
// get posts by individual user
const getUsersPosts = async (authorID : string) => {  

    const result = await prisma.post.findMany({
        where : {
            authorId : authorID
        },
        orderBy : {
          createdAt : 'desc'
        },
        include : {
          _count : {
            select : {
              comments : true
            }
          }
        },        
        
    })

    // count total post 
    // const totalPosts = await prisma.post.count({
    //   where : {
    //     authorId : authorID
    //   }
    // })


    // count total post using aggregate
    const totalPosts = await prisma.post.aggregate({
      _count : {
        id : true,
      },

      where : {
        authorId : authorID
      }
    })
     

    return {
      result,
      totalPosts
    }
}



// USER --> shudhu nijer post update korte parbe, but "isFeatured" update korte parbe na
// USER --> shobaar post update korte parbe

const updatePost = async (postID : string, updateData : Partial<Post>, authorID : string, isAdmin : boolean) => {

  console.log({postID, authorID, updateData, isAdmin});

  const postData = await prisma.post.findUniqueOrThrow({
    where : {
      id  : postID
    },
    select : {
      id : true,
      authorId : true
    }
  })

  if(!isAdmin && (postData.authorId !== authorID)){
    throw new Error("You are not the author!")
  }

  // jodi shudhu USER hoy tahole object theke "isFeatured" property e delete kore dibe jate ta update na korte pore
  if(!isAdmin) {
    delete updateData.isFeatured
  }

    const result = await prisma.post.update({
      where : {
        id : postID
      },
      data : {
        ...updateData
      }
    })
  return result

}





// USER ONLY CAN UPDATE HIS OWN POST
// const updatePost = async (postID : string, updateData : Partial<Post>, authorID : string) => {

//   console.log({postID, authorID, updateData});

//   const postData = await prisma.post.findUniqueOrThrow({
//     where : {
//       id  : postID
//     },
//     select : {
//       id : true,
//       authorId : true
//     }
//   })

//   if(postData.authorId !== authorID){
//     throw new Error("You are not the author!")
//   }

//   else {
//     const result = await prisma.post.update({
//       where : {
//         id : postID
//       },
//       data : {
//         ...updateData
//       }
//     })
//   return result
//   }
// }





// delete post
// USER nijer post delete korte parbe
// ADMIN shobar post delete korte parbe

const deletePost = async(postID:string, authorID:string, isAdmin:boolean) => {

  const postData = await prisma.post.findUniqueOrThrow({
    where : {
      id : postID
    }
  })

  // jodi 'admin' na hoy, and also login kora user er id 'post er author' er id er sathe match na kore tahole error throw koro
  if(!isAdmin && (postData.authorId !== authorID)) {
    throw new Error("Author not matched for delete!")
  }

  return await prisma.post.delete({
    where : {
      id : postID
    }
  })
}




const getStats = async () => {

  // postCount, publishedPost, draftPost, archivedPost, totalComments, totalViews

  return await prisma.$transaction(async(tx) => {

    const [totalPosts, totalPublisedPost, totalDraftPost, totalArchivedPost, totalComment, totalApprovedComment, totalRejectedComment, totalUsers, totalAdminCount, allUsersCount, totalViews] = await Promise.all([

    await tx.post.count(),    // result goes to the first element of the array == "totalPosts"

    await tx.post.count({     // result goes to the second element of the array == "totalPublisedPost"
      where : {
        status : PostStatus.PUBLISHED
      }
    }),

    await tx.post.count({     // result goes to the third element of the array == "totalDraftPost"
      where : {
        status : PostStatus.DRAFT
      }
    }),

    await tx.post.count({     // result goes to the fourth element of the array == "totalArchivedPost"
      where : {
        status : PostStatus.ARCHIVED
      }
    }),

    await tx.comment.count(),

    await tx.comment.count({
      where : {
        status : CommentStatus.APPROVED
      }
    }),

    await tx.comment.count({
      where : {
        status : CommentStatus.REJECT
      }
    }),


    await tx.user.count({
      where : {
        role : "USER"      }
    }),


    await tx.user.count({
      where : {
        role : "ADMIN"
      }
    }),


    await tx.user.count(),

    await tx.post.aggregate({
      _sum : {
        views : true
      }
    })


    ])

    return {
      totalPosts,
      totalPublisedPost,
      totalDraftPost,
      totalArchivedPost,
      totalComment,
      totalApprovedComment,
      totalRejectedComment,
      totalUsers,
      totalAdminCount,
      allUsersCount,
      totalViews : totalViews._sum.views


    }

  })
}


// to be continued





export const postService = {
  createPost,
  getAllPosts,
  getPostById,
  getUsersPosts,
  updatePost,
  deletePost,
  getStats,

};




// skip = (page - 1) * limit