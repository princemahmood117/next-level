import { env } from "@/env"
import { cookies } from "next/headers";

const API_URL = env.API_URL

// type define for search params
interface GetBlogParams {
    isFeatured? : boolean,
    search? : string,
}

// type define for options
interface ServiceOptions {
    cache? : RequestCache,
    revalidate? : number,
}


export interface BlogData {
  title: string;
  content: string;
  tag?: string[];
}


export const blogService = {
    getBlogsPost : async function(params?: GetBlogParams, options?: ServiceOptions) {

        try {

            const url = new URL(`${API_URL}/posts`)

            // console.log('params inside object : ', Object.entries(params)); // returns an array

            if(params) {
                Object.entries(params).forEach(([key , value]) => {
                    console.log('key : ',key , 'value : ', value );
                    if(value !== undefined && value !==null  && value !== "") {
                        url.searchParams.append(key, value)
                    }
                })
            }

            
            console.log('url.toString : ', url.toString());

            const config:RequestInit = {}

            if(options?.cache) {
                config.cache = options.cache
            }
            if(options?.revalidate) {
                config.next = {revalidate : options.revalidate}
            }

            config.next = {...config.next, tags : ["blogPosts"]} // tags == label for the cache data

            const res = await fetch(url.toString(), config) 
            
            
            const data = await res.json()
            
            return {data : data, error : null}

        } 
        
        catch (err) {
            return {data : null, error : {message : "Something went wrong"}}
        }

    },




    
    // get post by ID
    getBlogsByID : async function (id:string) {
        try {
            const res = await fetch(`${API_URL}/posts/${id}`)

            const data = await res.json()

            return {data : data, error : null}
        }      
        catch (err) {
            return {data : null, error : {message : "Something went wrong fetching dynamic data"}}
        }
    
    },


    // create blog

    createBlogPost: async (blogData: BlogData) => {
    try {
      const cookieStore = await cookies();

      const res = await fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieStore.toString(),
        },
        body: JSON.stringify(blogData),
      });

      const data = await res.json();

      if (data.error) {
        return {
          data: null,
          error: { message: "Error: Post not created." },
        };
      }

      return { data: data, error: null };
    } catch (err) {
      return { data: null, error: { message: "Something Went Wrong" } };
    }
  },











}