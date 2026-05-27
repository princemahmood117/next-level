import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


 
// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
    const user = await getUser()
    if(!user) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

  return NextResponse.redirect(new URL('/login', request.url))
}
 
export const config = {
  matcher: '/dashboard',
}