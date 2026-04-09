"use server"

import { BlogData, blogService } from "@/service/blog.service"
import { updateTag } from "next/cache";

export const getBlogs = async() => {
    return await blogService.getBlogsPost()
}


export const createBlogPost = async (data: BlogData) => {
  const res = await blogService.createBlogPost(data);
  updateTag("blogPosts");
  return res;
};