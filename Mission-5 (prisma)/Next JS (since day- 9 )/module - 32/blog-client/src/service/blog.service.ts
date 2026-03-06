import { env } from "@/env"

const API_URL = env.API_URL


export const blogService = {
    getBlogsPost : async function() {

        try {
            const res = await fetch(`${API_URL}/posts`)
            
            const data = await res.json()
            // sent the data to the page
            
            return {data : data.posts, error : null}

        } 
        
        catch (err) {
            return {data : null, error : {message : "Something went wrong"}}
        }

    }
}