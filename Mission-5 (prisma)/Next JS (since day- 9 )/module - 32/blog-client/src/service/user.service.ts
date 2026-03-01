import { cookies } from "next/headers";

export const userService = {
  getSession: async function () {
    
try {

    // get cookie in the server component
    const cookieStore = await cookies();

    console.log("cookie store : ", cookieStore.toString());

    const res = await fetch("http://localhost:5000/api/auth/get-session", {
      headers: {
        Cookie: cookieStore.toString(),
      },
      cache: "no-cache",
    });

    const session = await res.json();

    if(!session) {

    }

    

    console.log("this is the session : ", session);
} catch (error) {
    console.log(error,{message : "error on the try-catch"});
}
  },
};
