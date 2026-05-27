/* eslint-disable @typescript-eslint/no-explicit-any */

"use server"
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";


export const loginUser = async (userData : FieldValues) => {

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(userData),
        })
        const result = await res.json()
        console.log(result);

        const storeCookie = await cookies();

        if(result.success) {
            storeCookie.set("token", result.data.accessToken)
            storeCookie.set("refreshToken", result.data.refreshToken)
        }

        return result
        
    } catch (error:any) {
        return Error(error);
    }

}


export const getUser = async () => {

    try {

        const storedToken = await cookies();

        const token = storedToken.get("token")?.value;
        console.log({token});
        
        let decodedData = null;

        if(token) {
            decodedData = await jwtDecode(token)
            console.log("decoded token from index.ts: ", decodedData);
            return decodedData
        } else {
            return null
        }


        
    } catch (error) {
        console.log(error);
    }
}