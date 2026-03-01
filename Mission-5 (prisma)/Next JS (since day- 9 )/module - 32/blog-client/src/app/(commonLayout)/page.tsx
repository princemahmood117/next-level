

// import { cookies } from "next/headers";

export default async function Home() {

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
