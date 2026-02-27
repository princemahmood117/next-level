

import { authClient } from "@/lib/auth-client";

export default async function Home() {


  // this is the session after the login but wont work
  const session = await authClient.getSession()

  console.log("session from auth-client", session);

  
  return (
    <div></div>
  );
}
