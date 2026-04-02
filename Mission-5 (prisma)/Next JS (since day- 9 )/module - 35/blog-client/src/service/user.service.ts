import { env } from "@/env";
import { cookies } from "next/headers";

const AUTH_URL = env.AUTH_URL


export const userService = {
  getSession: async function () {

try {

    // get cookie in the server component
    const cookieStore = await cookies();

    console.log("cookie store : ", cookieStore.toString());


    const res = await fetch(`${AUTH_URL}/get-session`, {
      headers: {
        Cookie: cookieStore.toString(),
      },
      cache: "no-cache",
    });

    
    const session = await res.json();

    if(session === null) {
        return {data : null, error : {message : "data is found null..."}}
    }

    return {data : session, error : null}

} catch (error) {
    console.log(error);
    return {data : null, error : {message : "Something wrong in the try catch"}};
}
  },
};


// no cache means this cookie will not be cached ever (by default nextjs does that)
