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




const getAllPosts = async ({search, tags, isFeatured, status}: {
  search: string | undefined;
  tags: string[] | [];
  isFeatured : boolean | undefined;
  status : PostStatus | undefined
}) => {

    const andconditions:PostWhereInput[] = [];

    if(search) {
        andconditions.push({
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
        andconditions.push({
          tags: {
            hasEvery: tags as string[],
          }
        })
    }


    if(typeof isFeatured === 'boolean') {
        andconditions.push({
            isFeatured
        })
    }


    if(status) { 
        andconditions.push({
            status
        })
    }





  const posts = await prisma.post.findMany({
    where: {
      AND : andconditions
    },
  });
  return posts;
};

export const postService = {
  createPost,
  getAllPosts,
};
