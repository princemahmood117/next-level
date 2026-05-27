import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getUser } from './src/service/auth'
 
const ALLOWED_ROLES = ["admin", "user"]

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
  const user = await getUser();
  if(!user) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  if(!ALLOWED_ROLES.includes(user.role)) {
    return NextResponse.redirect(new URL("/login", request.url))
  }
  return NextResponse.next()
}
 
export const config = {
  matcher: ["/profile", "/dashboard", "/dashboard/:path*"],
}