import { NextRequest, NextResponse } from "next/server"
import { userService } from "./service/user.service";
import { Roles } from "./constants/roles";

export const proxy = async (request : NextRequest) => {

    const pathname = request.nextUrl.pathname

    let isAuthenticated = false
    let isAdmin = false;

    const {data} = await userService.getSession()
    console.log("data from proxy ", data);

    // if session exists nd the user is 'admin'
    if(data) {
        isAuthenticated = true;
        isAdmin = data.user.role === Roles.user
    }

    // if not authenticated / no session found
    if(!isAuthenticated) {
        return NextResponse.redirect(new URL('/login', request.url))
    }


    // If the user is an admin AND they are trying to access '/dashboard',
    //    then redirect them to /admin-dashboard.
    if(isAdmin && pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/admin-dashboard', request.url))
    }


    // If the user is not admin AND they are trying to access '/admin-dashboard',
    //    then redirect them to /dashboard.
    if(!isAdmin && pathname.startsWith('/admin-dashboard')) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }
    

    return NextResponse.next()

}


export const config = {
    matcher : [
        '/dashboard', 
        '/admin-dashboard', 
        '/dashboard/:path*', 
        '/admin-dashboard/:path*'],
}
