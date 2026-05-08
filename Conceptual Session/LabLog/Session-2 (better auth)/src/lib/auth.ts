import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { admin, createAccessControl, twoFactor } from "better-auth/plugins";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_KEY);



export const statement = {
    user: ["create", "read", "update", "delete"], // Permissions available for created roles
    equipment : ["create", "read", "update", "delete"]
} as const;

export const ac = createAccessControl(statement);

// what admin can do with other models
export const adminRoleCanDo = ac.newRole({
    user : ["create", "read", "update", "delete"],
    equipment : ["create", "read", "update", "delete"]
})

// what user can do with the models
export const userRoleCanDo = ac.newRole({
    equipment : ["read", "update"]
})







export const auth = betterAuth({
    appName:'Lab log',

    database : prismaAdapter(prisma, {
        provider : "postgresql",
    }),

    trustedOrigins : [process.env.FRONTEND_PORT!],

    emailAndPassword : {
        enabled : true,        
    },

    socialProviders : {
        github : {
            clientId : process.env.GITHUB_CLIENT_ID as string ,
            clientSecret : process.env.GITHUB_CLIENT_SECRET as string,
            redirectURI : `${process.env.FRONTEND_PORT}/api/auth/callback/github`
        }
    },

    

    plugins : [
        
        // admin plugin
        admin({
            adminRoles : ["admin", "user"],
            defaultRole : "user",
            roles : {
                admin : adminRoleCanDo,
                user : userRoleCanDo
            }
        }),


        // 2 factor plugin
        twoFactor({
            otpOptions : {                
                async sendOTP({user, otp}, ctx) {
                    // send otp to user
                    console.log({user, otp});

                    await resend.emails.send({
                        from: 'Lab log <onboarding@resend.dev>',
                        to: user?.email,
                        subject: '2 Factor Authentication Email',
                        html: `<p>Your OTP is <b>${otp}</b> </p>`,
                })
                }
            }
        })
    ]

});