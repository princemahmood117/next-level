import { env } from "@/env"

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

            const res = await fetch(url.toString(), config) 
            
            
            const data = await res.json()
            
            return {data : data, error : null}

        } 
        
        catch (err) {
            return {data : null, error : {message : "Something went wrong"}}
        }

    }
}