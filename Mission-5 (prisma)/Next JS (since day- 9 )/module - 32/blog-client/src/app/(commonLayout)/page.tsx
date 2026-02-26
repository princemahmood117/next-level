

import { authClient } from "@/lib/auth-client";

export default async function Home() {


  const session = await authClient.getSession()

  console.log("session from auth-client", session);

  
  return (
    <div></div>
  );
}
