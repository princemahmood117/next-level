

// import { cookies } from "next/headers";

import { userService } from "@/service/user.service";

export default async function Home() {

  const {data} = await userService.getSession()

  console.log('session from the service', data);



  

  // // get cookie in the server component
  // const cookieStore = await cookies();

  // console.log('cookie store : ', cookieStore.toString());

  // const res = await fetch("http://localhost:5000/api/auth/get-session", {
  //   headers : {
  //     Cookie : cookieStore.toString()
  //   },
  //   cache : 'no-cache',
  // })
  
  // const session = await res.json()

  // console.log('this is the session : ', session);

  
  return (
    <div></div>
  );
}
